import { IPomodoroEstates } from './IPomodoroEstates';

export class LongRestState implements IPomodoroEstates {
  stage: string;
  noticeToUser: string;
  buttonText: string;
  messageAfterCountdown: string;
  action: () => void;

  constructor() {
    this.action = () => {
      console.log('teste');
    };
    this.buttonText = '';
    this.noticeToUser = '';
    this.stage = '';
    this.messageAfterCountdown = '';
  }
}
