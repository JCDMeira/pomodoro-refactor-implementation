export const formatTimeToShow = (time: string | null) =>
  time ? Number(time) / 60 : null;
