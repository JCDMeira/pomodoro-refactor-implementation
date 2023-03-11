import { IPomodoroEstates, viewMessages } from './IPomodoroEstates';

export class RestarteState implements IPomodoroEstates {
  viewMessages: viewMessages;
  action: () => void;

  constructor() {
    this.action = () => {
      console.log('teste');
    };
    this.viewMessages = {
      buttonTextBeforeCount: 'Restart',
      buttonTextAfterCount: 'Restart',
      messageOnCountdown: 'Focus',
      messageAfterCountdown: `Time's up. Rest a little`,
      nextStageOnCount: 'pause',
      nextStageAfterCount: 'shortRest',
    };
  }
}
