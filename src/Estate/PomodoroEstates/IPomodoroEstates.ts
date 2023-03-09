export interface IPomodoroEstates {
  viewMessages: viewMessages;
  action: () => void;
}

export type viewMessages = {
  stage: string;
  noticeToUser: string;
  buttonText: string;
  messageAfterCountdown: string;
};
