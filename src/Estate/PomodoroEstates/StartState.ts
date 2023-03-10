import { IPomodoroEstates, viewMessages } from './IPomodoroEstates';

export class StartState implements IPomodoroEstates {
  viewMessages: viewMessages;
  action: () => void;

  constructor() {
    this.viewMessages = {
      buttonText: 'Start',
      noticeToUser: 'Focus',
      stage: 'Pause',
      messageAfterCountdown: `Time's up. Rest a little`,
      buttonTextAfterCountdown: 'Rest',
    };
    this.action = () => {
      console.log('teste');
    };
  }
}
