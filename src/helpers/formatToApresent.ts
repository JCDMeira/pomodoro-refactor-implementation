export const formatToApresent = (num: number) =>
  num < 10 ? '0' + num : `${num}`;
