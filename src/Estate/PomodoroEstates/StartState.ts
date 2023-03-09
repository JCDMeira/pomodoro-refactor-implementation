import { IPomodoroEstates, viewMessages } from './IPomodoroEstates';

export class StartState implements IPomodoroEstates {
  viewMessages: viewMessages;
  action: () => void;

  constructor() {
    this.viewMessages = {
      buttonText: '',
      noticeToUser: '',
      stage: '',
      messageAfterCountdown: '',
    };
    this.action = () => {
      console.log('teste');
    };
  }
}
