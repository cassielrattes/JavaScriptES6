// BOOLEAN E CONDICIONAIS

var possuiGraduacao = false;
var possuiDoutorado = true;

/* IF E ELSE */

if (possuiGraduacao) {
  console.log("Possui Graduação");
} else {
  console.log("Não Possui Graduação");
}

/* IF, ELSE E ELSE IF */

if (possuiGraduacao) {
  console.log("Possui Graduação");
} else if (possuiDoutorado) {
  console.log("Possui Graduação, mas não possui doutorado");
} else {
  console.log("Não Possui Nada");
}

/* TERNÁRIO */

possuiGraduacao
  ? console.log("Possui Graduação")
  : console.log("Não Possui Graduação");

/* FALSY */

/*
if(false)
if(0) // ou -0
if(NaN)
if(null)
if(undefined)
if('') // ou "" ou ``
*/

/* TRUTHY */

/*
if(true)
if(1)
if(' ')
if("Cassiel")
if(-5)
if({})
*/

/* OPERADOR LÓGICO DE NEGAÇÃO ! */

/* 
if(!true) // false
if(!1) // false
if(!'') // true
if(!undefined) // true
if(!!' ') // true
if(!!'') // false
*/

/* Dica, você pode utilizar o !!
para verificar se uma expressão
é Truthy ou Falsy */

/* OPERADORES DE COMPARAÇÃO */

/* < E <=, > E >= */

10 > 5; // true
5 > 10; // false
20 < 10; // false
10 <= 10; // true
10 >= 11; // false

/* ==, ===, != E !== */

10 == "10"; // true
10 == 10; // true
10 === "10"; // false
10 === 10; // true
10 != 15; // true
10 != "10"; // false
10 !== "10"; // true

/* OPERADORES LÓGICOS && */

true && true; // true
true && false; // false
false && true; // false
"Gato" && "Cão"; // 'Cão'
5 - 5 && 5 + 5; // 0
"Gato" && false; // false
5 >= 5 && 3 < 6; // true

/* Se ambos os valores forem TRUE
ele irá retornar o último valor
verificando. Se algum valor for
FALSE ele irá retornar o mesmo e
não irá continuar a verificar os 
próximos */

/* OPERADORES LÓGICOS || */

true || true; // true
true || false; // true
false || true; // true
"Gato" || "Cão"; // 'Gato'
5 - 5 || 5 + 5; // 10
"Gato" || false; // 'Gato'
5 >= 5 || 3 < 6; // true

/* Retorna o primeiro valor TRUE
que encontrar */

/* SWITCH */

var corFavorita = "";

switch (corFavorita) {
  case "Azul":
    console.log("Olhe para o céu");
    break;
  case "Vermelho":
    console.log("Olhe para rosas");
    break;
  case "Amarelo":
    console.log("Olhe para o sol");
    break;
  default:
    console.log("Feche os olhos");
}
