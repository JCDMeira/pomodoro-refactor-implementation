import React, { FormEvent, useState } from 'react';
import classNames from 'classnames';
import FormInput from '../FormInput';

type FormProps = {
  isDrawerOpen: boolean;
};
const Form: React.FC<FormProps> = ({ isDrawerOpen }) => {
  const [allTimes, setAllTimes] = useState({
    focusTime: null,
    shortRest: null,
    longRest: null,
  });

  const handlingTime = ({ target: { value, name } }: any) => {
    if (!/[0-9]/.test(value.at(-1)) && value.at(-1) !== undefined) return;
    setAllTimes({ ...allTimes, [name]: value });
  };

  const handleSubimit = (e: FormEvent) => {
    e.preventDefault();
    e.stopPropagation();
  };

  return (
    <form
      id="sidebar"
      className={classNames({
        'fixed top-0 bottom-0 right-0 min-w-fit w-2/5 pt-16 gap-y-14 flex flex-col bg-zinc-800 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-20 border-2 border-gray-300 rounded-tl-lg rounded-bl-lg z-[1] duration-1000 ease-in-out':
          true,
        'translate-x-full': !isDrawerOpen,
      })}
      onSubmit={handleSubimit}
    >
      <FormInput
        label="Tempo de foco"
        name="focusTime"
        time={allTimes.focusTime}
        handlingTime={handlingTime}
      />

      <FormInput
        label="Tempo de descanso curto"
        name="shortRest"
        time={allTimes.shortRest}
        handlingTime={handlingTime}
      />

      <FormInput
        label="Tempo de descanso longo"
        name="longRest"
        time={allTimes.longRest}
        handlingTime={handlingTime}
      />

      <button
        type="submit"
        id="save-button"
        className="bg-white text-zinc-700 rounded-full w-1/2 max-w-md py-2 font-semibold text-center fs-1 mx-auto"
      >
        Salvar
      </button>
    </form>
  );
};

export default Form;
