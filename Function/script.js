// FUNCTION

/* Toda função é criada com o constructor Function e por isso herda
as suas propriedades e métodos. */

function areaQuadrado(lado) {
  return lado * lado;
}

const perimetroQuadrado = new Function("lado", "return lado * 4");

/* PROPRIEDADES */

/* Function.length retorna o total de argumentos da função.
Function.name retorna uma string com o nome da função. */

function somar(n1, n2) {
  return n1 + n2;
}
somar.length; // 2
somar.name; // 'somar'

/* FUNCTION.CALL() */

/* function.call(this, arg1, arg2, ...) executa a função,
sendo possível passarmos uma nova referência ao this da
mesma. */

const carro = {
  marca: "Ford",
  ano: 2018,
};

function descricaoCarro() {
  console.log(this.marca + " " + this.ano);
}

descricaoCarro(); // undefined undefined
descricaoCarro.call(); // undefined undefined
descricaoCarro.call(carro); // Ford 2018

/* THIS */

/* O valor de this faz referência ao objeto criado durante a
construção do objeto (Constructor Function), Podemos trocar a
referência do método ao this, utilizando o call(). */

const carros = ["Ford", "Fiat", "VW"];
const frutas = ["Banana", "Pera", "Uva"];

carros.forEach((item) => {
  console.log(item);
}); // Log de cada Carro

carros.forEach.call(carros, (item) => {
  console.log(item);
}); // Log de cada Carro

carros.forEach.call(frutas, (item) => {
  console.log(item);
}); // Log de cada Fruta

/* EXEMPLO REAL */

/* O objeto atribuído a lista será o substituido pelo primeiro
argumento de call(). */

function Dom(seletor) {
  this.element = document.querySelector(seletor);
}

Dom.prototype.ativo = function (classe) {
  this.element.classList.add(classe);
};

const lista = new Dom("ul");
lista.ativo("ativar");
console.log(lista);

/* ARRAY-LIKE */

/* HTMLCollection, NodeList e demais objetos do Dom, são parecidos
com uma array. Por isso conseguimos utilizar os mesmos na
substituição do this em call. */

const li = document.querySelectorAll("li");
const filtro = Array.prototype.filter.call(li, function (item) {
  return item.classList.contains("ativo");
});

console.log(filtro); // Retorna os itens que possuem ativo

/* FUNCTION.APPLY() */

/* O apply(this, [arg1, arg2, ...]) funciona como o call, a
única diferença é que os argumentos da função são passados
através de uma array. */

const numeros = [3, 4, 6, 1, 34, 44, 32];

Math.max.apply(null, numeros);
Math.max.call(null, 3, 4, 6, 1, 34, 44, 32);

// Podemos passar null para o valor
// de this, caso a função não utilize
// o objeto principal para funcionar

/* APPLY VS CALL */

/* A única diferença é a array como segundo argumento. */

const li2 = document.querySelectorAll("li");

function itemPossuiAtivo(item) {
  return item.classList.contains("ativo");
}

const filtro1 = Array.prototype.filter.call(li, itemPossuiAtivo);
const filtro2 = Array.prototype.filter.apply(li, [itemPossuiAtivo]);

/* FUNCTION.BIND() */

/* Diferente de call e apply, bind(this, arg1, arg2, ...) não
irá executar a função mas sim retornar a mesma com o novo
contexto de this */

const li3 = document.querySelectorAll("li");

const filtrarLi = Array.prototype.filter.bind(li3, function (item) {
  return item.classList.contains("ativo");
});

filtrarLi();

// const $ = document.querySelectorAll.bind(document);

/* ARGUMENTOS E BIND */

/* Não precisamos passar todos os argumentos no momento do bind,
podemos passar os mesmos na nova função no momento da
execução da mesma. */

const carro2 = {
  marca: "Ford",
  ano: 2018,
  acelerar: function (aceleracao, tempo) {
    return `${this.marca} acelerou ${aceleracao} em ${tempo}`;
  },
};
carro2.acelerar(100, 20);

const honda = {
  marca: "Honda",
};

const acelerarHonda = carro2.acelerar.bind(honda);
acelerarHonda(200, 10);

/* ARGUMENTOS COMUNS */

/* Podemos passar argumentos padrões para uma função e retornar
uma nova função. */

function imc(altura, peso) {
  return peso / (altura * altura);
}
imc(1.8, 70);

const imc180 = imc.bind(null, 1.8);
imc180(70);
