// OBJETOS

/* Criar um objeto é simples, basta definirmos uma variável e inicia a
definição do seu valor com chave {}. Mas e se precisarmos criar
um novo objeto, com as mesmas características do anterior? */

const carro = {
  marca: "Marca",
  preco: 0,
};

const honda = carro;
honda.marca = "Honda";
honda.preco = 4000;

const fiat = carro;
fiat.marca = "Fiat";
fiat.preco = 3000;

/* CONSTRUCTOR FUNCTIONS */

/* Para isso existem as Constructor Functions, ou seja, Funções
Construtoras que são responsáveis por construir novos objetos
sempre que chamamos a mesma. */

function Carro() {
  this.marca = "Marca";
  this.preco = 0;
}

const honda = new Carro();
honda.marca = "Honda";
honda.preco = 4000;

const fiat = new Carro();
fiat.marca = "Fiat";
fiat.preco = 3000;

/* Utiliza pascal case. */

/* NEW KEYWORD */

/* A palavra chave new é responsável por criar um novo objeto
baseado na função que passarmos a frente dela. */

const honda = new Carro();

// 1 Cria um novo objeto
honda = {};

// 2 Define o protótipo
honda.prototype = Carro.prototype;

// 3 Aponta a variável this para o objeto
this = honda;

// 4 Executa a função, substituindo this pelo objeto
honda.marca = "Marca";
honda.preco = 0;

// 5 Retorna o novo objeto
return (honda = {
  marca: "Marca",
  preco: 0,
});

/* THIS KEYWORD */

/* O this faz referência ao próprio objeto construído com a
Constructor Function. */

function Carros(marca, precoInicial) {
  const taxa = 1.2;
  const precoFinal = precoInicial * taxa;
  this.marca = marca;
  this.preco = precoFinal;
  console.log(this);
}
const uno = new Carros("Uno", 2000);

/* Variáveis dentro da Constructor
estão "protegidas" */

/* EXEMPLO REAL */

/* Quando mudamos a propriedade seletor, o objeto DOM irá passar a
selecionar o novo seletor em seu métodos. */

const Dom = {
  seletor: "li",
  element() {
    return document.querySelector(`${this.seletor}:last-child`);
  },
  ativar() {
    this.element().classList.add("ativo");
  },
};

Dom.ativar(); // adiciona ativo ao li
Dom.seletor = "ul";
Dom.ativo(); // adiciona ativo ao ul

/* CONSTRUCTOR FUNCTION REAL */

/* Um objeto criado com uma Constructor, não irá influenciar em
outro objeto criado com a mesma Constructor */

function Dom(seletor) {
  this.seletor = seletor;
  this.element = function () {
    return document.querySelector(seletor);
  };
  this.ativar = function () {
    this.element().classList.add("ativo");
  };
}

const li = new Dom("li:last-child");

function AddRemove(seletor) {
  const elementList = document.querySelectorAll(seletor);
  this.element = elementList;

  this.addClass = function (classe) {
    elementList.forEach((item) => {
      item.classList.add(classe);
    });
  };
  this.removeClass = function (classe) {
    elementList.forEach((item) => {
      item.classList.remove(classe);
    });
  };
}

const listaItens = new AddRemove("li");
