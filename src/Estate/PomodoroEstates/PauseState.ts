import { IPomodoroEstates, viewMessages } from './IPomodoroEstates';

export class PauseState implements IPomodoroEstates {
  viewMessages: viewMessages;
  action: () => void;

  constructor() {
    this.action = () => {
      console.log('teste');
    };
    this.viewMessages = {
      buttonTextBeforeCount: 'Restart',
      buttonTextAfterCount: 'Restart',
      messageOnCountdown: 'Paused',
      messageAfterCountdown: `Paused`,
      nextStageOnCount: 'restart',
      nextStageAfterCount: 'restart',
    };
  }
}
