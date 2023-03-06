import { setLocalStorageItem } from './setLocalStorageItem';

type setPomodoroTimesOnLocalStorageProps = {
  focusTime: string;
  shortRest: string;
  longRest: string;
};
export const setPomodoroOnLocalStorage = ({
  focusTime,
  shortRest,
  longRest,
}: setPomodoroTimesOnLocalStorageProps) => {
  setLocalStorageItem({ key: 'focusTime', value: focusTime });
  setLocalStorageItem({ key: 'shortRest', value: shortRest });
  setLocalStorageItem({ key: 'longRest', value: longRest });
};
