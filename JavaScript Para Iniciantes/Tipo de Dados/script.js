// DADOS

var nome = "Cassiel"; // String
var idade = 18; // Number
var faculdade = true; // Boolean
var time; // Undefined
var comida = null; // Null
var simbolo = Symbol(); // Symbol
var novoObjeto = {}; // Object

console.log(nome, idade, faculdade, time, comida, simbolo, novoObjeto);

console.log(
  typeof nome,
  typeof idade,
  typeof faculdade,
  typeof time,
  typeof comida,
  typeof simbolo,
  typeof novoObjeto
);

var gols = 1000;
var frase1 = "Romário fez " + gols + " gols";
var frase2 = `Romário fez ${gols * 5} gols`;

console.log(frase1, frase2);
