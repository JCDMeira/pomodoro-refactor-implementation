import { allTimesType } from '../types';

export const onChangeOnlyForNumbers =
  (
    setter: React.Dispatch<React.SetStateAction<allTimesType>>,
    currentState: allTimesType,
  ) =>
  ({ target: { value, name } }: any) => {
    if (!/[0-9]/.test(value.at(-1)) && value.at(-1) !== undefined) return;
    setter({ ...currentState, [name]: value });
  };
