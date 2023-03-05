import React from 'react';

type FormInputProps = {
  label: string;
  name: string;
  time: number | null;
  handlingTime: (e: any) => void;
};
const FormInput: React.FC<FormInputProps> = ({
  label,
  name,
  time,
  handlingTime,
}) => {
  return (
    <div className="text-center w-3/4 mx-auto">
      <label htmlFor="focus" className="font-bold fs-1 block mb-2">
        {label}
      </label>
      <input
        id="focus"
        className="text-zinc-700 rounded-full w-1/2 max-w-xs font-semibold text-center py-0.5 fs-1"
        type="text"
        pattern="[0-9]*"
        name={name}
        value={time || ''}
        onChange={handlingTime}
      />
    </div>
  );
};

export default FormInput;
