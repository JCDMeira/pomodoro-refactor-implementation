import { IPomodoroEstates, viewMessages } from './IPomodoroEstates';

export class LongRestState implements IPomodoroEstates {
  viewMessages: viewMessages;
  action: () => void;

  constructor() {
    this.action = () => {
      console.log('teste');
    };
    this.viewMessages = {
      buttonTextBeforeCount: 'Rest',
      buttonTextAfterCount: 'Skip rest',
      messageOnCountdown: 'Relax a bit',
      messageAfterCountdown: 'Time to work',
      nextStageOnCount: 'start',
      nextStageAfterCount: 'start',
    };
  }
}
