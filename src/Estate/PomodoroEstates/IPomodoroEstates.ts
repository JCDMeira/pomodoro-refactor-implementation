export interface IPomodoroEstates {
  viewMessages: viewMessages;
  action: () => void;
}

export type viewMessages = {
  buttonTextBeforeCount: string;
  buttonTextAfterCount: string;
  messageOnCountdown: string;
  messageAfterCountdown: string;
  nextStageOnCount: string;
  nextStageAfterCount: string;
};
