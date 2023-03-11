export const formatToApresent = (time: number) => {
  const seconds = time % 60;
  const minutes = Math.trunc(time / 60);
  return `${format(minutes)}:${format(seconds)}`;
};

const format = (num: number) => num.toString().padStart(2, '0');
