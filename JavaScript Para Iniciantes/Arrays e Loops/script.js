// ARRAY

/* É um grupo de valores geralmente relacionados. Servem para
guardarmos diferentes valores em uma única variável. */

var videoGames = ["Switch", "PS4", "XBox"];

console.log(
  videoGames[0], // Switch
  videoGames[2] // Xbox
);

/* Acesse um elemento da array
utilizando [n] */

/* MÉTODOS E PROPRIEDADES DE UMA ARRAY */

var videoGames = ["Switch", "PS4", "XBox"];

console.log(
  videoGames.pop(), // Remove o último item e retorna ele
  videoGames.push("3DS"), // Adiciona ao final da array
  videoGames.length // 3
);

/* Existem diversos outros métodos,
como map, reduce, forEach e
mais que veremos mais à frente. */

/* FOR LOOP */

/* Fazem algo repetidamente até que uma condição seja atingida. */

for (var i = 0; i <= 10; i++) {
  console.log(i);
  // Retorna de 0 a 9 no console
}

/* O for loop possui 3 partes,
início, condição e incremento. */

/* WHILE LOOP */

var i = 0;
while (i < 10) {
  console.log(i);
  i++;
  // Retorna de 0 a 9 no console.
}

/* O for loop é o mais comum */

/* ARRAYS E LOOPS */

var videoGames = ["Switch", "PS4", "XBox"];
for (var i = 0; i < videoGames.length; i++) {
  console.log(videoGames[i]);
  // if (videoGames[i] === "PS4") {
  //   break;
  // }
}

/* FOREACH */

/* forEach é um método que executa uma função para cada item da 
Array. É uma forma mais simples de utilizarmos um loop 
com arrays (ou array-like). */

var videoGames = ["Switch", "PS4", "XBox"];
videoGames.forEach(function (item, index, array) {
  console.log(item, index, array);
  // O argumento item será atribuido dinamicamente
});

/* Podemos passar os seguintes
parâmetros item, index e
array. */

/* NÃO SE CONFUNDA COM A SINTAXE */

var numero = 0;
var maximo = 2;
for (; numero <= maximo; ) {
  console.log(numero);
  numero++;
}

/* Não aconselho escrever da forma
acima, mas funciona normalmente. */

var ultimoConsole = videoGames[videoGames.length - 1];
console.log(ultimoConsole);
