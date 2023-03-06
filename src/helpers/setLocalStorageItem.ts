type setLocalStorageItemProps = {
  key: string;
  value: string;
};
export const setLocalStorageItem = ({ key, value }: setLocalStorageItemProps) =>
  localStorage.setItem(key, value);
