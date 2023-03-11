import { getLocalStorageItem } from '../../helpers';
import { IPomodoroEstates, viewMessages } from './IPomodoroEstates';

export class StartState implements IPomodoroEstates {
  viewMessages: viewMessages;
  next: () => void;

  constructor() {
    this.viewMessages = defaultState;
    this.next = () => {
      console.log('a');
    };
  }
}

export const defaultState: viewMessages = {
  currentTimer: Number(getLocalStorageItem('focusTime')),
  buttonTextBeforeCount: 'Start',
  buttonTextAfterCount: 'Pause',
  messageOnCountdown: 'Focus',
  messageAfterCountdown: `Time's up. Rest a little`,
  nextStage: 'rest',
};
