import { IPomodoroEstates, viewMessages } from './IPomodoroEstates';

export class StartState implements IPomodoroEstates {
  viewMessages: viewMessages;
  action: () => void;

  constructor() {
    this.viewMessages = {
      buttonTextBeforeCount: 'Start',
      buttonTextAfterCount: 'Pause',
      messageOnCountdown: 'Focus',
      messageAfterCountdown: `Time's up. Rest a little`,
      nextStageOnCount: 'pause',
      nextStageAfterCount: 'shortRest',
    };
    this.action = () => {
      console.log('teste');
    };
  }
}
