import { ITeste } from './ITeste';

export class Teste1 implements ITeste {
  retornaTexto = () => `Teste1`;
}

export class Teste2 implements ITeste {
  retornaTexto = () => `Teste2`;
}

export class Teste3 implements ITeste {
  retornaTexto = () => `Teste3`;
}

export class Testando implements ITeste {
  private teste1;
  private teste2;
  private teste3;

  private currentState;
  private selector;
  private setTitle;

  constructor(setTitle: (title: string) => void) {
    this.teste1 = new Teste1();
    this.teste2 = new Teste2();
    this.teste3 = new Teste3();
    this.currentState = this.teste1;
    this.setTitle = setTitle;
    this.selector = {
      teste1: this.teste1,
      teste2: this.teste2,
      teste3: this.teste3,
    };
  }
  retornaTexto = () => {
    console.log(this.currentState.retornaTexto());
    return this.currentState.retornaTexto();
  };

  setCurrentState = (state: keyof typeof this.selector) => {
    this.currentState = this.selector[state];
    this.setTitle(this.currentState.retornaTexto());
  };
}
