import { IPomodoroEstates, viewMessages } from './IPomodoroEstates';

export class StartState implements IPomodoroEstates {
  viewMessages: viewMessages;
  action: () => 'shortRest' | 'start';

  constructor() {
    this.viewMessages = {
      buttonText: 'Start',
      noticeToUser: 'Focus',
      nextStage: 'Pause',
      messageAfterCountdown: `Time's up. Rest a little`,
      buttonTextAfterCountdown: 'shortRest',
    };
    this.action = () => 'shortRest';
  }
}
