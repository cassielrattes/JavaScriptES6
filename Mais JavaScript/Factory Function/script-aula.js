("use strict");

// FACTORY FUNCTION

/* São funções que retornam um objeto sem a necessidade de
utilizarmos a palavra chave new. Possuem basicamente a mesma 
função que constructor functions / classes. */

function createButton(text) {
  function element() {
    const buttonElement = document.createElement("button");
    buttonElement.innerText = text;
    return buttonElement;
  }

  return {
    element,
    text,
  };
}

const comprarBtn = createButton("Comprar");
comprarBtn.text = "cassiel";
console.log(comprarBtn);

// MÉTODOS / VARIÁVEIS PRIVADAS

/* Uma das vantagens é a possibilidade de criarmos 
métodos / variáveis privadas. */

function criarPessoa(nome, sobrenome) {
  const nomeCompleto = `${nome} ${sobrenome}`;

  function andar() {
    return `${nomeCompleto} andou`;
  }

  function nadar() {
    return `${nomeCompleto} nadou`;
  }

  return {
    nome,
    sobrenome,
    andar,
    nadar,
  };
}

const cassiel = criarPessoa("Cassiel", "Rattes Cortez");
console.log(cassiel.andar());
console.log(cassiel.nadar());

// ICE FACTORY

/* Podemos impedir que os métodos e propriedades sejam
modificados com Object.freeze(). Ideia inicial de Douglas
Crockford. */

function criarPessoa1(nome, sobrenome) {
  const nomeCompleto = `${nome} ${sobrenome}`;
  function andar() {
    return `${nomeCompleto} andou`;
  }
  return Object.freeze({
    nome,
    sobrenome,
    andar,
  });
}

const cassiel1 = criarPessoa1("Cassiel", "Rattes Cortez");
cassiel1.nome = "Paulo";
console.log(cassiel1);

// CONSTRUCTOR FUNCTION / FACTORY FUNCTION

/* Uma das vantagens da Factory Function é a possibilidade de
iniciarmos a mesma sem a utilização da palavra chave new.
Também é possível fazer isso com uma Constructor Function. */

function Pessoa(nome) {
  if (!(this instanceof Pessoa)) return new Pessoa(nome); // ou (!new.target)
  this.nome = nome;
}

Pessoa.prototype.andar = function () {
  return `${this.nome} andou`;
};

const designer = Pessoa("Cassiel");

console.log(designer);
