// ITERABLE

/* São objetos que possuem o método [Symbol.iterator], geralmente
no protótipo, é dentro dele que a função que lida com a iteração
será definida. Ex: Array, String, NodeList, boa parte das Array-like e
outros. */

const frutas = ["Banana", "Uva", "Morango"];
const frase = "Isso é JavaScript";

fetch("https://pokeapi.co/api/v2/pokemon/").then(({ headers }) =>
  console.log(headers)
);

// FOR...OF

/* É possível fazemos um loop por cada iteração do objeto iterável
utilizando o for...of. Além deste loop podemos também utilizar o
Spread Operator nos mesmos. */

for (const fruta of frutas) {
  console.log(fruta);
}

for (const char of frase) {
  console.log(char);
}
