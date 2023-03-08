export interface IPomodoroEstates {
  stage: string;
  noticeToUser: string;
  buttonText: string;
  messageAfterCountdown: string;
  action: () => void;
}
