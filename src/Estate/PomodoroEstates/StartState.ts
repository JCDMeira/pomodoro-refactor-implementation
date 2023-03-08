import { IPomodoroEstates } from './IPomodoroEstates';

export class StartState implements IPomodoroEstates {
  stage: string;
  noticeToUser: string;
  buttonText: string;
  messageAfterCountdown: string;
  action: () => void;

  constructor() {
    this.stage = 'START';
    this.noticeToUser = 'Focus';
    this.buttonText = 'Pause';
    this.messageAfterCountdown = `Time's up. Rest a little`;
    this.action = () => {
      console.log('teste');
    };
  }
}
