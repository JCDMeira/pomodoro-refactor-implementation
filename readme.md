<p align="center">
  <image
  src="https://img.shields.io/github/languages/count/JCDMeira/pomodoro-refactor-implementation"
  />
  <image
  src="https://img.shields.io/github/languages/top/JCDMeira/pomodoro-refactor-implementation"
  />
  <image
  src="https://img.shields.io/github/last-commit/JCDMeira/pomodoro-refactor-implementation"
  />
  <image
  src="https://img.shields.io/github/watchers/JCDMeira/pomodoro-refactor-implementation?style=social"
  />
</p>

# 📋 Indíce

- [Proposta](#id01)
  - [Conclusões da POC](#id01.1)
  - [Demais observações](#id01.2)
- [Feito com](#id02)
- [Pré-requisitos](#id03)
- [Procedimentos de instalação](#id04)
- [Autor](#id05)

# 🚀 Proposta <a name="id01"></a>

Esse projeto é a realização de uma "Proof of Concept" (POC) ou prova de conceito no português.

A implementação é um teste de como adaptar um design pattern state a um projeto de pomodoro. Em que foi baseado na implementação do [Caio Marcellus](https://github.com/marcelluscaio) que fez um pomodoro com js vannila usando o conceito de objetos literais sendo chaveados para mudar a interação que era usada para manipular a view através de eventos.

Achei inicialmente que isso faria uma adaptação muito legal para refatorar usando react e uma forma adaptada de design pattern state. Então surgiu a ideia de remodelar o projeto para atingir essa finalidade.

O projeto original pode ser visto no [repositório original](https://github.com/marcelluscaio/Pomodoro) pertencente ao Caio.

Já adianto que tendo em vista o conceito e objetivo da POC, o projeto não foi implementado na fidelidade ao projeto que tem como base, foram adaptadas coisas, mudando comportamentos e fazendo as variaões necessárias.

## Conclusões <a name="id01.1"></a>

O design pattern estate pode ser usado no frontend, e até adaptado para também manipular a view. Sendo com react isso pode ser feito usando o constructor da classe para receber uma função que altere os estados que serão mostrados.

```tsx


export class PomodoroStates {
  private updateView;
  private selector;
  private cycle = 1;

  private currentState;

  constructor(updateView: (props: viewMessages) => void) {
    this.updateView = updateView;
    this.selector = {
      start: new StartState(),
      rest: new ShortRestState(),
      pause: new PauseState(),
      restart: new RestarteState(),
    };
    this.currentState = this.selector.start;
  }
                        .
                        .
                        .
}
```

Uma disvantagem que isso pode gerar é que a manipulação da view pode se tornar complexa, gerando uma camada de complexidade que não
era necessária.

Isso ocorre principalmente se não tiver uma clareza de o que define cada estado. O que foi o caso do projeto de pomodoro, que temos um único botão, e isso amarra toda a lógica de passagem de estado a um único botão, com o agravante de que temos estados que são algo como um intermediário de um estado, como pausado e reestart.

Ainda poderia ser criado uma sequência diferente para adaptar tal comportamento, mas em viés de como os testes estavam indo para um rumo complexo a ideia foi manter o state implementado, mas de maneira a mudar um pouco seu gerenciamento.

Vejo o design pattern como algo que pode ter uso para o frontend em momentos de estados mais definidos, mesmo que seja um botão ou algo que faça passar para o próximo estado previsto. Mas desde que se tenha clareza da sequência de estados.

Pode ser ainda mais útil em lugares que cada botão ou ação independente empure para um estado. Assim não há acoplamento da sequência de estados na construção da lógica, tornando ainda mais útil a maneira de uso desse padrão conhecido.

## Demais observações <a name="id01.2"></a>

Foi testado o uso de separação da lógica de alguns componentes em custom hooks, isso favorece manipular toda lógica que tiver a ver com um determinado caso em um lugar só.

Cria uma espécie de máquina de estado isolado, que controla e rege tudo sobre aquele estado. Lembrando que da forma implementada não há persistência entre múltiplos componentes. Pois cada um acessa uma informação, não sendo mantida por um contexto ou store essa informação não será a mesma. A cada chamada do custom hook é gerado uma instância dessas informações.

Sendo apenas para separação de complexidade, desacoplamento da lógica e reuso de código se for o caso.

```ts
import { useEffect, useState } from 'react';

export const useDrawer = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const toggleDrawer = () => setIsDrawerOpen((current) => !current);

  useEffect(() => {
    const onEscape = (e: globalThis.KeyboardEvent) => {
      e.key === 'Escape' ? setIsDrawerOpen(false) : '';
    };

    document.addEventListener('keydown', (e) => onEscape(e));

    return document.removeEventListener('keydown', (e) => onEscape(e));
  }, []);

  return { isDrawerOpen, toggleDrawer };
};
```

Outro teste feito foi com adotar o uso dee currying function para manipulação de handling functions em formulários que tenham objetos como estados dos formulários controlados.

O caso em particular só aceita mudanças quando são números.

Mas é possível perceber que a curryng function irá devolver uma função que recebe um evento de input e atualiza um estado, sendo que sempre recebe o estado e a ação de atualização dele.

```ts
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
```

Seu uso seria algo como

```ts
const handlingTime = onChangeOnlyForNumbers(setAllTimes, allTimes);
```

Fixando uma tipagem genéria seria uma função passível de uso em qualquer ponto da aplicação que precisar manipular estados em formato de objetos em formulários.

# 🛠 Feito com <a name="id02"></a>

<br />

- [React](https://reactjs.org/)
- [Tailwind](https://tailwindcss.com/docs/guides/create-react-app)

# ☑️ Pré-requisitos <a name="id03"></a>

<br />

- [x] Editor de código de sua preferência (recomendado VS code)
- [x] Git
- [x] Gerenciador de pacotes Yarn ou NPM

<br />

# 📝 Procedimentos de instalação <a name="id04"></a>

<br />

Clone este repositório usando o comando:

```bash
git clone https://github.com/JCDMeira/pomodoro-refactor-implementation.git
```

Na pasta do projeto instale as dependências com uso do npm ou yarn

```bash
npm install

ou

yarn install
```

<br />

# :sunglasses: Autor <a name="id05"></a>

<br />

- Linkedin - [jeanmeira](https://www.linkedin.com/in/jeanmeira/ 'https://www.linkedin.com/in/jeanmeira/')
- Instagram - [@jean.meira10](https://www.instagram.com/jean.meira10/ 'https://www.instagram.com/jean.meira10/')
- GitHub - [JCDMeira](https://github.com/JCDMeira 'https://github.com/JCDMeira')
