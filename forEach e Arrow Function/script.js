// FOREACH E ARROW FUNCTION

/* FOREACH */

/* Constantemente vamos selecionar uma lista de itens do dom. A
melhor forma para interagirmos com os mesmo é utilizando o 
método forEach. */

const imgs = document.querySelectorAll("img");

imgs.forEach(function (item) {
  console.log(item);
});

/* PARÂMETROS DO FOREACH */

/* O primeiro parâmetro é o callback, ou seja, a função que será
ativada a cada item. Essa função pode receber três parâmetros:
valorAtual, index e array. */

const imgs = document.querySelectorAll("img");

imgs.forEach(function (valorAtual, index, array) {
  console.log(valorAtual); // o item atual no loop
  console.log(index); // o número do index (posição na lista)
  console.log(array); // a Array completa
});

/* FOREACH E ARRAY */

/* forEach é um método de Array, alguns objetos array-like possuem
este método. Caso não possua, o ideal é transformá-los em uma
array. */

const titulos = document.getElementsByClassName("titulo");
const titulosArray = Array.from(titulos);

titulosArray.forEach(function (item) {
  console.log(item);
});

/* ARROW FUNCTION */

/* Sintaxe curta em relação a function expression. Basta
remover a palavra chave function e adicionar a fat arrow => após
os argumentos. */

const imgs = document.querySelectorAll("img");

imgs.forEach((item) => {
  console.log(item);
});

/* ARGUMENTOS E PARÊNTESES */

const imgs = document.querySelectorAll("img");

// argumento único não precisa de parênteses
imgs.forEach((item) => {
  console.log(item);
});

// multiplos argumentos precisam de parênteses
imgs.forEach((item, index) => {
  console.log(item, index);
});

// sem argumentos precisa dos parênteses, mesmo vazio
let i = 0;
imgs.forEach(() => {
  console.log(i++);
});

/* RETURN */

/* É possível omitir as chaves {} para uma função que retorna uma
linha. */

const imgs = document.querySelectorAll("img");

imgs.forEach((item) => console.log(item));

/* Não é permitido fechar a linha
com ponto e virgula(;) */
