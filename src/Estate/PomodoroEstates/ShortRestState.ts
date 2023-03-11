import { IPomodoroEstates, viewMessages } from './IPomodoroEstates';

export class ShortRestState implements IPomodoroEstates {
  action: () => void;
  viewMessages: viewMessages;

  constructor() {
    this.viewMessages = {
      buttonTextBeforeCount: 'Rest',
      buttonTextAfterCount: 'Skip rest',
      messageOnCountdown: 'Relax a bit',
      messageAfterCountdown: 'Time to work',
      nextStageOnCount: 'start',
      nextStageAfterCount: 'start',
    };
    this.action = () => {
      console.log('teste');
    };
  }
}
