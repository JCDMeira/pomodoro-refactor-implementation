import { IPomodoroEstates, viewMessages } from './IPomodoroEstates';

export class ShortRestState implements IPomodoroEstates {
  action: () => 'shortRest' | 'start';
  viewMessages: viewMessages;

  constructor() {
    this.viewMessages = {
      buttonTextBeforeCount: 'Rest',
      buttonTextAfterCount: 'Skip rest',
      messageOnCountdown: 'Relax a bit',
      messageAfterCountdown: 'Time to work',
      nextStageOnCount: 'Start',
      nextStageAfterCount: 'Start',
    };
    this.action = () => 'start';
  }
}
