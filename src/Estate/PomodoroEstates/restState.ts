import { getLocalStorageItem } from '../../helpers';
import { IPomodoroEstates, viewMessages } from './IPomodoroEstates';

export class ShortRestState implements IPomodoroEstates {
  next: () => void;
  viewMessages: viewMessages;

  constructor() {
    this.viewMessages = {
      currentTimer: Number(getLocalStorageItem('shortRest')),
      buttonTextBeforeCount: 'Rest',
      buttonTextAfterCount: 'Resting...',
      messageOnCountdown: 'Relax a bit',
      messageAfterCountdown: 'Time to work',
      nextStage: 'start',
    };
    this.next = () => {
      console.log('teste');
    };
  }
}
