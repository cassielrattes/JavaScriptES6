// Operadores de Atribuição

var x = 5;
var y = 10;

console.log(
  (x += y), // x = x + y (15)
  (x -= y), // x = x - y (-5)
  (x *= y), // x = x * y (50)
  (x /= y), // x = x / y (0.5)
  (x %= y), // x = x % y (0)
  (x **= y) // x = x ** y (9765625)
);

/* OPERADOR TERNÁRIO */

/* Abreviação de condicionais com if e else */

var idade = 18;
var podeBeber = idade >= 18 ? "Pode beber" : "Não pode beber";
console.log(podeBeber); // condição ? true : false

/* Geralmente utilizado quando
precisamos atribuir um valor
para uma variável, dependendo de
uma condição */

/* IF ABREVIADO */

/* Não é necessário abrir e fechar as chaves {} quando retornamos
apenas uma linha de código */

var possuiFaculdade = true;
if (possuiFaculdade) console.log("Possui");
else console.log("Não Possui");

// ou

// if (possuiFaculdade)
//   console.log("Possui");
// else
//   console.log("Não Possui");
