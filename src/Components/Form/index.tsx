import React, { useState } from "react";
import classNames from "classnames";

type FormProps = {
  isDrawerOpen: boolean;
};
const Form: React.FC<FormProps> = ({ isDrawerOpen }) => {
  const [allTimes, setAllTimes] = useState({
    focusTime: 0,
    shortRest: 0,
    longRest: 0,
  });

  const handlingTime = ({ target: { value, name } }: any) => {
    setAllTimes({ ...allTimes, [name]: value });
  };

  return (
    <form
      id="sidebar"
      className={classNames({
        "fixed top-0 bottom-0 right-0 min-w-fit w-2/5 pt-16 gap-y-14 flex flex-col bg-zinc-800 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-20 border-2 border-gray-300 rounded-tl-lg rounded-bl-lg z-[1] duration-1000 ease-in-out":
          true,
        "translate-x-full": !isDrawerOpen,
      })}
    >
      <div className="text-center w-3/4 mx-auto">
        <label htmlFor="focus" className="font-bold fs-1 block mb-2">
          Tempo de foco
        </label>
        <input
          id="focus"
          className="text-zinc-700 rounded-full w-1/2 max-w-xs font-semibold text-center py-0.5 fs-1"
          type="text"
          // inputmode="numeric"
          pattern="[0-9]*"
          name="focusTime"
          value={allTimes.focusTime}
          onChange={handlingTime}
        />
      </div>

      <div className="text-center w-3/4 mx-auto">
        <label htmlFor="short-break" className="font-bold fs-1 block mb-2">
          Tempo de descanso curto
        </label>
        <input
          id="short-break"
          className="text-zinc-700 rounded-full w-1/2 max-w-xs font-semibold text-center py-0.5 fs-1"
          type="text"
          // inputmode="numeric"
          pattern="[0-9]*"
          name="shortRest"
          value={allTimes.shortRest}
          onChange={handlingTime}
        />
      </div>

      <div className="text-center w-3/4 mx-auto">
        <label htmlFor="long-break" className="font-bold fs-1 block mb-2">
          Tempo de descanso longo
        </label>
        <input
          id="long-break"
          className="text-zinc-700 rounded-full w-1/2 max-w-xs font-semibold text-center py-0.5 fs-1"
          type="text"
          // inputmode="numeric"
          pattern="[0-9]*"
          name="longRest"
          value={allTimes.longRest}
          onChange={handlingTime}
        />
      </div>

      <button
        id="save-button"
        className="bg-white text-zinc-700 rounded-full w-1/2 max-w-md py-2 font-semibold text-center fs-1 mx-auto"
      >
        Salvar
      </button>
    </form>
  );
};

export default Form;
