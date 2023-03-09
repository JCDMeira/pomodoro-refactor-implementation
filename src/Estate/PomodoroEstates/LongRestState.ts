import { IPomodoroEstates, viewMessages } from './IPomodoroEstates';

export class LongRestState implements IPomodoroEstates {
  viewMessages: viewMessages;
  action: () => void;

  constructor() {
    this.action = () => {
      console.log('teste');
    };
    this.viewMessages = {
      buttonText: '',
      noticeToUser: '',
      stage: '',
      messageAfterCountdown: '',
    };
  }
}
