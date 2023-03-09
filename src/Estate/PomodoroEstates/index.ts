import { LongRestState } from './LongRestState';
import { PauseState } from './PauseState';
import { RestarteState } from './RestarteState';
import { ShortRestState } from './ShortRestState';
import { StartState } from './StartState';

export class PomodoroStates {
  currentState;
  selector;

  constructor() {
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
  };
}
