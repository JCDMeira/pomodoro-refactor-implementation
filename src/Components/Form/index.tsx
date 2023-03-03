import React from "react";

const Form: React.FC = () => {
  return (
    <form
      id="sidebar"
      className="fixed top-0 bottom-0 right-0 min-w-fit w-2/5 pt-16 gap-y-14 flex flex-col bg-zinc-800 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-20 border-2 border-gray-300 rounded-tl-lg rounded-bl-lg z-[1] translate-x-full duration-1000 ease-in-out"
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
          value="40"
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
          value="5"
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
          value="15"
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
