// REFERÊNCIA DA SELEÇÃO

/* É possível utilizarmos 0 $& durante o momento da substituição
para fazermos uma referência à seleção. */

// Procura: Java
const regexp = /Java/g;

console.log(
  "PHP e Java são linguagens diferentes".replace(regexp, "--$&Script")
);
// PHP e --JavaScript são linguagens diferentes
// $& será igual à Java

// GRUPO DE CAPTURA

/* É possível definirmos diferentes grupos de captura, que poderão
ser referenciados durante a substituição. Basta envolvermos um
grupo entre () parênteses. A referência se cada grupo será feita
com $n, sendo o primeiro item $1. */

// Procura: sequência alfanumérica, seguida
// de @, seguido de alfanumérico ou .
const regexp1 = /(\w+)@[\w.]+/g;
console.log("andre@gmail.com".replace(regexp1, "$1@gmail.com"));
// andre@gmail.com

// Não use este regexp pra emails,
// ele falha em alguns casos.

// MAIS DO QUE CAPTURA APENAS

/* Um grupo também serve para agruparmos uma sequência de
caracteres que queremos em repetição. */
const regexp2 = /(ta)+/gi;
console.log("Tatata, tata, ta".replace(regexp2, "Pá"));
// Pá, Pá, Pá

// POSITIVE LOOKAHEAD

/* Faz a seleção dos itens que possuírem o padrão dentro de (?=) à
sua frente, Apesar de utilizar () parênteses o positive lookahead
não captura grupo. */

// Procura: dígitos em sequência, que
// possuírem px, sem selecionar o px.
const regexp3 = /\d(?=px)/g;
console.log("2em, 4px, 5%, 2px, 1px".replace(regexp3, "X"));
// 2em, Xpx, 5%, Xpx, Xpx

// NEGATIVE LOOKAHEAD

/* Faz a seleção dos itens que não possuírem o padrão dentro de (?!) à
sua frente. */

// Procura: dígitos que não possuírem px
// sem selecionar o restante.
const regexp4 = /\d(?!px)/g;
console.log("2em, 4px, 5%, 2px, 1px".replace(regexp4, "X"));
// Xem, 4px, X%, 2px, 1px

// ?: não captura grupo
