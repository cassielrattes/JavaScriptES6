"use strict";

// ESCOPO

/* ESCOPO DE FUNÇÃO */

/* Variáveis declaradas dentro de funções não são acessadas fora
das mesmas. */

function mostrarCarro() {
  var carro = "Fusca";
  console.log(carro);
}

mostrarCarro(); // Fusca no console
console.log(carro); // Erro, carro is not defined

/* Escopo evita o conflito entre
nomes. */

/* VARIÁVEL GLOBAL (ERRO) */

/* Declarar variáveis sem a palavra chave var, const ou let, cria
uma variável que pode ser acessada em qualquer escopo (global).
Isso é um erro. */

function mostrarCarro() {
  carro = "Fusca";
  console.log(carro);
}

mostrarCarro(); // Fusca
console.log(carro); // Fusca

/* 'use strict' impede isso. */

/* ESCOPO DE FUNÇÃO (PAI) */

/* Variáveis declaradas no escopo pai da função, conseguem ser
acessadas pelas funções. */

var carro = "Fusca";

function mostrarCarro() {
  var frase = `Meu carro é um ${carro}`;
  console.log(frase);
}

mostrarCarro(); // Meu carro é um Fusca
console.log(carro); // Fusca

/* ESCOPO DE BLOCO */

/* Variáveis criadas com var. vazam o bloco. Por isso com a
introdução do ES6 a melhor forma de declararmos uma variável é
utilizando const e let, pois estas respeitam o escopo de bloco. */

if (true) {
  let carro = "Gol";
  console.log(carro);
}

console.log(carro); // Gol

/* VAR VAZA O BLOCO */

/* Mesmo com a condição falsa, a variável ainda será declarada
utilizando hoisting e o valor ficará como undefined */

if (false) {
  var carro = "Kombi";
  console.log(carro);
}

console.log(carro); // undefined

/* CONST E LET NO LUGAR DE VAR */

/* A partir de agora vamos utilizar apenas const e let para
declararmos variáveis */

if (true) {
  const carro = "Celta";
  console.log(carro);
}

console.log(carro); // erro, carro is not defined

/* FOR LOOP */

/* Ao utilizar var dentro de um for loop, que é um bloco, o valor do
variável utilizada irá vazar e existir fora do loop */

/* FOR LOOP COM LET */

/* Com o let evitamos que o número vaze. */

for (let i = 0; i < 10; i++) {
  console.log(`Número ${i}`);
}
console.log(i); // i is not defined

/* CONST */

/* Mantém o escopo no bloco, impede a redeclaração e impede a
modificação do valora da variável, evitando bugs no código. */

const mes = "Dezembro";
mes = "Janeiro"; // erro, tentou modificar o valor
const semana; // erro, declarou sem valor

const data = {
  dia: 11,
  mes: "Dezembro",
  ano: 2020,
};

data.dia = 29; // funciona
data = "Janeiro"; // erro

/* Variáveis com valores constantes */

/* LET */

/* Mantém o escopo no bloco, impede a redeclaração, mas permite a
modificação do valor da variável. */

let ano;
ano = 2020;
ano++;
console.log(ano); // 2021

let ano = 2020; // erro, redeclarou a variável
