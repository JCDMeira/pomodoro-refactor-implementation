import { allTimesType } from '../types';
import { formatInputTimeToSave } from './formatInputTimeToSave';

export const setTimeObject = ({
  focusTime,
  shortRest,
  longRest,
}: allTimesType) => {
  return {
    focusTime: formatInputTimeToSave(focusTime),
    shortRest: formatInputTimeToSave(shortRest),
    longRest: formatInputTimeToSave(longRest),
  };
};
