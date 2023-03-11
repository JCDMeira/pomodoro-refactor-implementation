import { IPomodoroEstates, viewMessages } from './IPomodoroEstates';

export class RestarteState {
  viewMessages: viewMessages;
  action: () => void;

  constructor() {
    this.action = () => {
      console.log('teste');
    };
    this.viewMessages = {
      buttonText: '',
      noticeToUser: '',
      nextStage: '',
      messageAfterCountdown: '',
      buttonTextAfterCountdown: '',
    };
  }
}
