import { statesTypes } from '.';

export interface IPomodoroEstates {
  viewMessages: viewMessages;
  next: () => void;
}

export type viewMessages = {
  currentTimer: number;
  buttonTextBeforeCount: string;
  buttonTextAfterCount: string;
  messageOnCountdown: string;
  messageAfterCountdown: string;
  nextStage: statesTypes;
  clickOnCount?: statesTypes;
  cycle?: number;
};
