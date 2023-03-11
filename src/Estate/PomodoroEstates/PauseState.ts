import { IPomodoroEstates, viewMessages } from './IPomodoroEstates';

export class PauseState implements IPomodoroEstates {
  viewMessages: viewMessages;
  next: () => void;

  constructor() {
    this.next = () => {
      console.log('teste');
    };
    this.viewMessages = {
      currentTimer: 0,
      buttonTextBeforeCount: 'Restart',
      buttonTextAfterCount: 'Restart',
      messageOnCountdown: 'Paused',
      messageAfterCountdown: `Paused`,
      nextStage: 'restart',
      clickOnCount: 'start',
    };
  }
}
