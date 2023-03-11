import { IPomodoroEstates, viewMessages } from './IPomodoroEstates';

export class ShortRestState implements IPomodoroEstates {
  viewMessages: viewMessages;
  action: () => void;

  constructor() {
    this.viewMessages = {
      buttonText: 'skip rest',
      noticeToUser: 'Relax a bit',
      stage: 'Rest',
      messageAfterCountdown: 'Time to work',
      buttonTextAfterCountdown: 'Start',
    };
    this.action = () => {
      console.log('teste');
    };
  }
}
