import { IPomodoroEstates, viewMessages } from './IPomodoroEstates';

export class RestarteState implements IPomodoroEstates {
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
      messageOnCountdown: 'Focus',
      messageAfterCountdown: `Time's up. Rest a little`,
      nextStage: 'pause',
      clickOnCount: 'start',
    };
  }
}
