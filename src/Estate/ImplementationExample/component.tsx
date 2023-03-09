import React, { useState } from 'react';
import { TestState } from '.';

const ImplementationExample: React.FC = () => {
  const [texto, setTexto] = useState('');
  const setTitle = (title: string) => setTexto(title);
  const teste = new TestState(setTitle);
  return (
    <>
      <h1 className="text-center fs-3 mb-8">{`${texto}`}</h1>
      <button
        className="w-2/3 max-w-xl py-1 fs-2 lg:py-4 rounded-full uppercase bg-[#602020] cursor-pointer"
        onClick={() => teste.currentState.retornaTexto()}
      >
        testar
      </button>

      <button
        className="w-2/3 max-w-xl py-1 fs-2 lg:py-4 rounded-full uppercase bg-[#602020] cursor-pointer"
        onClick={() => teste.setCurrentState('teste1')}
      >
        teste1
      </button>

      <button
        className="w-2/3 max-w-xl py-1 fs-2 lg:py-4 rounded-full uppercase bg-[#602020] cursor-pointer"
        onClick={() => teste.setCurrentState('teste2')}
      >
        teste2
      </button>

      <button
        className="w-2/3 max-w-xl py-1 fs-2 lg:py-4 rounded-full uppercase bg-[#602020] cursor-pointer"
        onClick={() => teste.setCurrentState('teste3')}
      >
        teste3
      </button>
    </>
  );
};

export default ImplementationExample;
