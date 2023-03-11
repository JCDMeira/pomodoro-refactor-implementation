import { IPomodoroEstates, viewMessages } from './IPomodoroEstates';

export class RestarteState {
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
      nextStageOnCount: 'Pause',
      nextStageAfterCount: 'shortRest',
    };
  }
}
