import { IPomodoroEstates, viewMessages } from './IPomodoroEstates';

export class StartState implements IPomodoroEstates {
  viewMessages: viewMessages;
  action: () => 'shortRest' | 'start';

  constructor() {
    this.viewMessages = {
      buttonTextBeforeCount: 'Start',
      buttonTextAfterCount: 'Pause',
      messageOnCountdown: 'Focus',
      messageAfterCountdown: `Time's up. Rest a little`,
      nextStageOnCount: 'Pause',
      nextStageAfterCount: 'shortRest',
    };
    this.action = () => 'shortRest';
  }
}
