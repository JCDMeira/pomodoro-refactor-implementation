import { formatTimeToShow } from './formatTimeToShow';
import { getLocalStorageItem } from './getLocalStorageItem';

export const getDefaultTimeObject = () => {
  const focusTime = formatTimeToShow(getLocalStorageItem('focusTime'));
  const shortRest = formatTimeToShow(getLocalStorageItem('focusTime'));
  const longRest = formatTimeToShow(getLocalStorageItem('focusTime'));

  return { focusTime, shortRest, longRest };
};
