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
      start: new StartState(),
      shortRest: new ShortRestState(),
      // longRest: new LongRestState(),
      // pause: new PauseState(),
      // restart: new RestarteState(),
    };
    this.currentState = this.selector.start;
  }

  setCurrentState = (state: keyof typeof this.selector) => {
    this.currentState = this.selector[state];
    this.updateView(this.currentState.viewMessages);
  };

  nextState = () => {
    this.currentState = this.selector[this.currentState.action()];
  };
}
