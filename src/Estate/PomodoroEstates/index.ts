import { getLocalStorageItem } from '../../helpers';
import { viewMessages } from './IPomodoroEstates';
import { PauseState } from './PauseState';
import { RestarteState } from './RestarteState';
import { ShortRestState } from './restState';
import { StartState } from './StartState';

export type statesTypes = 'start' | 'rest' | 'pause' | 'restart';
export class PomodoroStates {
  private updateView;
  private selector;
  private cycle = 1;

  private currentState;

  constructor(updateView: (props: viewMessages) => void) {
    this.updateView = updateView;
    this.selector = {
      start: new StartState(),
      rest: new ShortRestState(),
      pause: new PauseState(),
      restart: new RestarteState(),
    };
    this.currentState = this.selector.start;
  }

  private setCurrentState = (state: statesTypes) => {
    if (state === 'rest' && this.cycle < 4) {
      this.cycle += 1;

      if (this.cycle === 4) {
        this.currentState = this.selector[state];
        this.updateView({
          ...this.currentState.viewMessages,
          cycle: this.cycle,
          currentTimer: Number(getLocalStorageItem('longRest')),
        });
        return;
      }
    } else if (this.cycle === 4) {
      this.cycle = 1;
    }

    this.currentState = this.selector[state];
    this.updateView({ ...this.currentState.viewMessages, cycle: this.cycle });
  };

  nextState = () => {
    this.setCurrentState(this.currentState.viewMessages.nextStage);
  };
}
