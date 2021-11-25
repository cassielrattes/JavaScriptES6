// OBJETOS

/* Conjunto de variáveis e funções, que são chamadas de
propriedades e métodos. */

var pessoa = {
  nome: "Cassiel",
  idade: 18,
  profissao: "Desenvolvedor",
  faculdade: false,
  funcao: () => {
    return true;
  },
};

console.log(
  pessoa.nome, // "Cassiel"
  pessoa.faculdade, // false
  pessoa
);
/* Propriedades e métodos consistem
em nome (chave) e valor */

/* MÉTODOS */

/* É uma propriedade que possui uma 
função no local do seu valor */

var quadrado = {
  lados: 4,
  area: (lado) => {
    return lado * lado;
  },
  perimetro: function (lado) {
    return this.lados * lado; // this não funciona com array function
  },
  perimetro2(lado) {
    return this.lados * lado; // this não funciona com array function
  },
};

console.log(
  quadrado.lados, // 4
  quadrado.area(5), // 25
  quadrado.perimetro(5), // 20
  quadrado.perimetro2(5) // 25
);

/* ORGANIZAR O CÓDIGO */

/* Objetos servem para organizar o código em pequenas partes
reutilizáveis. */

console.log(
  Math.PI, // 3.14
  Math.random() // número aleatório
);

/* Math é um objeto nativo de
JavaScript. Já percebeu que 
console é um objeto e log() um
metódo? */

/* CRIAR UM OBJETO */

/* Um objeto é criado utilizando as chaves {} */

var carro = {};
var pessoa = {};

console.log(typeof carro); // object

/* DOT NOTATION GET */

/* Acesse propriedades de um objeto utilizando o ponto . */

var menu = {
  width: 800,
  height: 50,
  backgroundColor: "#84E",
};

var bg = menu.backgroundColor; // "#84E"
console.log(bg);

/* ADICIONAR PROPRIEDADES E MÉTODOS */

/* Basta adicionar um novo nome e definir o valor. */

var menu = {
  width: 800,
};

menu.height = 50;
menu.position = "fixed";

/* PALAVRA-CHAVE THIS */

/* this irá fazer uma referência ao próprio objeto */

var height = 120;
var menu = {
  width: 800,
  height: 50,
  metadeHeight() {
    return this.height / 2; /// pegaria o height de fora do objeto
  },
};

console.log(
  menu.metadeHeight() // 25
  // sem o this, seria 60
);

/* this irá retornar o próprio 
objeto */

/* PROTÓTIPO E HERANÇA */

/* O objeto herda propriedades e métodos do objeto que foi utilizado
para criar o mesmo. */

var menu = {
  width: 800,
};

console.log(
  menu.hasOwnProperty("width"), // true
  menu.hasOwnProperty("height") // false
);

/* hasOwnProperty é um método de
Object */
