// ARRAY E ITERAÇÃO

/* [].FOREACH() */

/* [].forEach(callback(itemAtual, index, array)) a
função de callback é executada para cada item da array. Ela possui
três argumentos, itemAtual (valor do item da array), index (index do
valor na array) e array (array original) */

const carros = ["Ford", "Fiat", "Honda"];
carros.forEach(function (item, index, array) {
  console.log(item.toUpperCase());
  console.log(index, array);
});

// com Arrow Function
carros.forEach((item, index, array) => {
  console.log(item.toUpperCase());
  console.log(index, array);
});

/* O método sempre retorna
undefined. */

/* ARROW FUNCTION */

const li = document.querySelectorAll("li");

li.forEach((i) => i.classList.add("ativo"));

li.forEach(function (item) {
  item.classList.add("ativo");
});

/* MODIFICAR A ARRAY ORIGINAL */

/* O terceiro argumento do callback é uma referência direta e se
modificando irá também modificar a array original. */

const carros2 = ["Ford", "Fiat", "Honda"];
carros2.forEach((item, index, array) => {
  array[index] = "Carro: " + item;
});

carros2; // ["Carro Ford", "Carro Fiat", "Carro Honda"]

/* [].MAP() */

/* [].map(callbakc(itemAtual, index, array)) funciona da
mesma forma que o forEach(), porém ao invés de retornar
undefined, retorna uma nova array com valores atualizados de
acordo com o return de cada iteração. */

const carros3 = ["Ford", "Fiat", "Honda"];
const newCarros = carros3.map((item) => {
  return "Carro " + item;
});

carros;
newCarros;

/* VALOR RETORNADO */

/* Se não retornarmos nenhym valor durante a iteração utilizando
map, o valor retornado como de qualquer função que não possui o
return, será undefined. */

const carros4 = ["Ford", "Fiat", "Honda"];
const newCarro2 = carros3.map((item) => {
  const novoValor = "Carro " + item;
});

newCarro2; // [undefined, undefined, undefined]

/* ARROW FUNCTION E [].MAP() */

/* Uma Arrow Function de linha única e sem chaves irá retornar o
valor após a fat arrow =>. */

const numeros = [2, 4, 6, 8, 10, 12, 14];
const numerosX3 = numeros.map((n) => n * 3);

numerosX3; // [6, 12, 18, 24, 30, 36, 42]

/* [].MAP() VS [].FOREACH() */

/* Se o objetivo for modificar os valores da array atual, sempre utilize
o map, pois assim uma nova array com os valores modificados é
retornada e você pode imediatamente iterar novamente sobre 
estes valores. */

const numeros_ = [2, 4, 6, 8, 10, 12, 14];
const numerosX3_ = numeros.map((n) => n * 3);

numerosX3_; // [6, 12, 18, 24, 30, 36, 42]

/* [].MAP COM OBJETOS */

/* Map pode ser muito útil para interagirmos com uma array de
objetos, onde desejamos isolar um valor único de cada objeto. */

const aulas = [
  {
    nome: "HTML 1",
    min: 15,
  },
  {
    nome: "HTML 2",
    min: 10,
  },
  {
    nome: "CSS 1",
    min: 20,
  },
  {
    nome: "JS 1",
    min: 25,
  },
];

const tempoAulas = aulas.map((aula) => aula.min);

const nomeAulas = function (aula) {
  return aula.nome;
};
const nomeAulas2 = (aula) => aula.nome;

const arrayNomeAulas = aulas.map(nomeAulas2);

console.log(tempoAulas, arrayNomeAulas);

/* [].REDUCE() */

/* [].reduce(callback(acumulador, valorAtual, index, array), valorInicial)
executa a função de callback para cada item da Array. Um valor
especial existe nessa função de callback, ele é chamado de
acumulador, mas é na verdade apenas o retorno da iteração
anterior. */

const aulas2 = [10, 25, 30];
const total1 = aulas2.reduce((acumulador, atual) => {
  return acumulador + atual;
});
total1; // 65

const total2 = aulas2.reduce((acc, cur) => acc + cur, 100);
total2; // 165

/* REDUCE PASSO A PASSO 1 */

/* O primeiro parâmetro do callback é o valor do segundo argumento
passado no reduce(callback, inicial) durante a primeira iteração.
Nas iterações seguintes este valor passa a ser o retornado pela 
anterior. */

// const aulas3 = [10, 25, 30];

// // 1
// aulas3.reduce((0, 10) => {
//   return 0 + 10;
// }, 0); // retorna 10

// // 2
// aulas3.reduce((10, 25) => {
//   return 10 + 25;
// }, 0); // retorna 35

// // 3
// aulas3.reduce((35, 30) => {
//   return 35 + 30;
// }, 0); // retorna 65

/* REDUCE PASSO A PASSO 2 */

/* Se não definirmos o valor inicial do acumulador, ele irá pular a
primeira iteração e começara a partir da segunda. Neste caso o
valor do acumulador será o valor do item da primeira iteração. */

// // 1
// aulas3.reduce((10, 25) => {
//   return 10 + 25;
// }); // retorna 35

// // 2
// aulas3.reduce((35, 30) => {
//   return 35 + 30;
// }); // retorna 65

/* MAIOR VALOR COM [].REDUCE() */

const numeros2 = [10, 25, 60, 5, 35, 10];

const maiorValor = numeros2.reduce((anterior, atual) => {
  return anterior < atual ? atual : anterior;
}, 0);

maiorValor; // 60

/* PODEMOS RETORNAR OUTROS VALORES */

const listaAulas = aulas.reduce((acumulador, aula, index) => {
  acumulador[index] = aula.nome;
  return acumulador;
}, {});

console.log(listaAulas);

/* [].REDUCERIGHT() */

/* Existe também o método [].reduceRight(), a diferença é que
este começa a iterar da direita para a esquerda, enquanto o reduce
itera da esquerda para a direita. */

const frutas = ["Banana", "Pera", "Uva"];

const frutasRight = frutas.reduceRight((acc, fruta) => acc + " " + fruta);
const frutasLeft = frutas.reduce((acc, fruta) => acc + " " + fruta);

frutasRight; // Uva Pera Banana
frutasLeft; // Banana Pera Uva

/* [].SOME() */

/* [].some(), se pelo menos um return da iteração for truthy, ele
retorna true. */

const frutas2 = ["Banana", "Pera", "Uva"];
const temUva = frutas.some((fruta) => {
  return fruta === "Uva";
}); // true

function maiorQue100(numero) {
  return numero > 100;
}
const numeros3 = [0, 43, 22, 88, 101, 2];
const temMaior = numeros3.some(maiorQue100); // true

/* [].EVERY() */

/* [].every(), se todos os returns das iterações forem truthy, o
método irá retornar true. Se pelo menos um for falsy, ele irá
retornar false. */

const frutas3 = ["Banana", "Pera", "Uva", ""];
// False pois pelo menos uma fruta
// está vazia '', o que é um valor falsy
const arraysCheias = frutas3.every((fruta) => {
  return fruta;
}); // false

const numeros4 = [6, 43, 22, 88, 101, 29];
const maiorQue3 = numeros4.every((n) => n > 3); // true

/* [].FIND() E [].FINDINDEX() */

/* [].find(), retorna o valor atual da primeira iteração que
retorna um valor truthy. Já o [].findIndex(), ao invés de
retornar o valor, retorna o index deste valor na array. */

const frutas4 = ["Banana", "Pera", "Uva", "Maça"];
const buscaUva = frutas4.findIndex((fruta) => {
  return fruta === "Uva";
}); // 2

const numeros5 = [6, 43, 22, 88, 101, 29];
const buscaMaior45 = numeros5.find((x) => x > 45); // 88

/* [].FILTER() */

/* [].filter(), retorna uma array com a lista de valores que
durante a sua iteração retornaram um valor truthy. */

const frutas5 = ["Banana", undefined, null, "", "Uva", 0, "Maça"];
const arrayLimpa = frutas5.filter((fruta) => {
  return fruta;
});

const numeros6 = [6, 43, 22, 88, 101, 29];
const buscaMaior46 = numeros6.filter((x) => x > 46); // [88, 101]
