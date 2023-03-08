import { IPomodoroEstates } from './IPomodoroEstates';
import { LongRestState } from './LongRestState';
import { PauseState } from './PauseState';
import { RestarteState } from './RestarteState';
import { ShortRestState } from './ShortRestState';
import { StartState } from './StartState';

export class PomodoroStates implements IPomodoroEstates {
  stage: string;
  noticeToUser: string;
  buttonText: string;
  messageAfterCountdown: string;
  action: () => void;

  onStart;
  onShortRest;
  onLongRestState;
  onPause;
  onRestarte;

  currentState;

  selector;
  constructor() {
    this.action = () => {
      console.log('teste');
    };
    this.buttonText = '';
    this.noticeToUser = '';
    this.stage = '';
    this.messageAfterCountdown = '';

    this.onStart = new StartState();
    this.onShortRest = new ShortRestState();
    this.onLongRestState = new LongRestState();
    this.onPause = new PauseState();
    this.onRestarte = new RestarteState();

    this.currentState = this.onStart;

    this.selector = {
      start: this.onStart,
      shortRest: this.onShortRest,
      longRest: this.onLongRestState,
      pause: this.onPause,
      restart: this.onRestarte,
    };
  }
}
