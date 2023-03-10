import { viewMessages } from './IPomodoroEstates';
import { LongRestState } from './LongRestState';
import { PauseState } from './PauseState';
import { RestarteState } from './RestarteState';
import { ShortRestState } from './ShortRestState';
import { StartState } from './StartState';

export class PomodoroStates {
  private updateView;

  currentState;
  selector;

  constructor(updateView: (props: viewMessages) => void) {
    this.updateView = updateView;
    this.selector = {
      Start: new StartState(),
      ShortRest: new ShortRestState(),
      LongRest: new LongRestState(),
      Pause: new PauseState(),
      Restart: new RestarteState(),
    };
    this.currentState = this.selector.Start;
  }

  setCurrentState = (state: keyof typeof this.selector) => {
    this.currentState = this.selector[state];
    this.updateView(this.currentState.viewMessages);
  };
}
