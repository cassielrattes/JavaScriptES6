// NÚMEROS

var numero1 = 23, // 23
  numero2 = 23e10, // 230000000000
  numero3 = 23.15; // 23.15

console.log(numero1, numero2, numero3);

// OPERADORES ARITMÉTICOS

var soma = 100 + 50, // 150
  subtracao = 100 - 50, // 50
  multiplicacao = 100 * 2, // 200
  divisao = 100 / 2, // 50
  expoente = 2 ** 4, // 16
  modulo = 14 % 5; // 4

console.log(soma, subtracao, multiplicacao, divisao, expoente, modulo);

// OPERADORES ARITMÉTICOS (STRINGS)

var soma = "100" + 50, // 10050
  subtracao = "100" - 50, // 50
  multiplicacao = "100" * "2", // 200
  divisao = "Comprei 10" / 2; // NaN (Not a Number)

/* É possível verificar se uma
variável é NaN ou não com a função isNaN() */

console.log(soma, subtracao, multiplicacao, divisao);

// A ORDEM IMPORTA

var total1 = 20 + 5 * 2, // 30
  total2 = (20 + 5) * 2, // 50
  total3 = (20 / 2) * 5, // 50
  total4 = 10 + 10 * 2 + 20 / 2; // 40

console.log(total1, total2, total3, total4);

// OPERADORES ARITMÉTICOS UNÁRIOS

/* INCREMENTO ++ */

var incremento = 5;
console.log(incremento++); // 5
console.log(incremento); // 6

var incremento2 = 5;
console.log(++incremento2); // 6
console.log(incremento2); // 6

/* DECREMENTO -- */

var decremento = 5;
console.log(decremento--); // 5
console.log(decremento); // 4

var decremento2 = 5;
console.log(--decremento2); // 4
console.log(decremento2); // 4

/* + E - */

var frase = "Isso é um teste";
+frase; // NaN
-frase; // NaN
console.log(+frase);

var idade = "28";
+idade; // 28 (Número)
-idade; // -28 (Número)
console.log(+idade);

var faculdade = true;
+faculdade; // 1 (Número)
-faculdade; // -1 (Número)
console.log(+faculdade);

var numero = +"80" / 2;
var unidade = "kg";
var peso = numero + unidade;
console.log(peso);
