export interface IPomodoroEstates {
  viewMessages: viewMessages;
  action: () => 'start' | 'shortRest';
}

export type viewMessages = {
  nextStage: string;
  noticeToUser: string;
  buttonText: string;
  messageAfterCountdown: string;
  buttonTextAfterCountdown: string;
};
