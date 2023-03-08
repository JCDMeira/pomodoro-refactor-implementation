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

/*
  @ A classe principal do state deverá instanciar sub-classes que respeitam a mesma assinatura.
  @ mas cada método em si fará coisas diferentes em seu processamento. De aacordo com o "estado atual"
  @ que define qual sub-classe está selecionada. E cada classe pode ter comportamentos bem distintos uma da outra

  @ No react temos mudanças que impactam a view e isso normalmente é atrelados a states (não confundir, states do react são advindos do useState, enquanto pattern state é um padrão de projetos da GoF). Para contornar isso e conseguir manter os estados se atualizando, a ideia foi instanciar a classe passando argumentos para seu construtor, que não pode ser diretamente o setState, mas uma função que irá atualizar o estado. Assim ao executar ela internamento o estado de forá irá mudar, e isso irá refletir na view.

*/

export class TestState {
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
