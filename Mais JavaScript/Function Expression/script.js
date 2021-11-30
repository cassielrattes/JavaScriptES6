// FUNCTION DECLARATION

/* São duas as formas mais comuns de declararmos uma função. A
que utilizamos até o momento é chamado de Function Declaration. */

function somar(a, b) {
  return a + b;
}

console.log(somar(4, 2)); // 6

// FUNCTION EXPRESSION

/* É criada a partir da declaração de uma variável, na qual
assinalamos uma função. Este função pode ser anônima ou
nomeada. A mesma poderá ser ativada através da variável
assinalada. */

const somar1 = function (a, b) {
  return a + b;
};

console.log(somar1(4, 2)); // 6

// HOISTING

/* Function Declarations são completamente definidas no momento
do hoisting, já function expressions apenas serão definidas no
momento da execução. Por isso a ordem da declaração de uma FE
possui importância */

console.log(somar2(4, 2)); // 6
// dividir(4, 2); // Erro

function somar2(a, b) {
  return a + b;
}

const dividir = function (a, b) {
  return a / b;
};
console.log(dividir(4, 2)); // 2

// ARROW FUNCTION

/* Podemos criar utilizando arrow functions. */

const somar3 = (a, b) => a + b;
console.log(somar3(4, 2)); // 6

const quadrado = (a) => a * a;
console.log(quadrado(4)); // 16

// ESTRUTURA / PREFERÊNCIA

/* Geralmente o uso entre expression / declaration é uma questão de
preferência. Function Expression força a criação da mesma antes
de sua ativação, o que pode contribuir para um código mais
estruturado. */

// Declarada como método de window
// vaza o escopo de bloco, como se
// fosse criada utilizando var

function somar4(a, b) {
  return a + b;
}

const dividir1 = (a, b) => a / b;

console.log(somar4(4, 2));
console.log(dividir1(4, 2));

// IIFE - IMMEDIATELY INVOKED FUNCTION EXPRESSION

/* Antes da introdução de modules e da implementação do escopo de
bloco, a forma mais comum utilizada para isolarmos o escopo de
um código JavaScript era através das chamadas IIFE's. */

var instrumento = "Violão";

(function () {
  var instrumento = "Guitarra";
  console.log(instrumento); // Guitarra
})();

console.log(instrumento); // Violão

// IIFE - ARROW FUNCTION

/* Compiladores ainda transformam modules em IIFE's para manter a
compatibilidade com brosers antigos. */

(() => {
  var instrumento = "Guitarra";
  console.log(instrumento); // Guitarra
})();

console.log(instrumento); // Violão
