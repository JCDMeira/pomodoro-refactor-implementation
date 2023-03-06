import { allTimesType } from './allTimesType';

export type FormProps = {
  isDrawerOpen: boolean;
  toggleDrawer: () => void;
  allTimes: allTimesType;
  handlingTime: (e: any) => void;
};
