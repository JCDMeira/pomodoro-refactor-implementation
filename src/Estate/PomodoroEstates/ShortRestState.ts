import { IPomodoroEstates, viewMessages } from './IPomodoroEstates';

export class ShortRestState implements IPomodoroEstates {
  action: () => 'shortRest' | 'start';
  viewMessages: viewMessages;

  constructor() {
    this.viewMessages = {
      buttonText: 'shortRest',
      noticeToUser: 'Relax a bit',
      nextStage: 'skip rest',
      messageAfterCountdown: 'Time to work',
      buttonTextAfterCountdown: 'Start',
    };
    this.action = () => 'start';
  }
}
