import { IPomodoroEstates, viewMessages } from './IPomodoroEstates';

export class LongRestState {
  viewMessages: viewMessages;
  action: () => string;

  constructor() {
    this.action = () => 'a';
    this.viewMessages = {
      buttonTextBeforeCount: 'Rest',
      buttonTextAfterCount: 'Skip rest',
      messageOnCountdown: 'Relax a bit',
      messageAfterCountdown: 'Time to work',
      nextStageOnCount: 'Start',
      nextStageAfterCount: 'Start',
    };
  }
}
