import { IPomodoroEstates, viewMessages } from './IPomodoroEstates';

export class LongRestState {
  viewMessages: viewMessages;
  action: () => string;

  constructor() {
    this.action = () => 'a';
    this.viewMessages = {
      buttonText: '',
      noticeToUser: '',
      nextStage: '',
      messageAfterCountdown: '',
      buttonTextAfterCountdown: '',
    };
  }
}
