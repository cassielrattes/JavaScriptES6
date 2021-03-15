// ARRAY

/* Arrays armazenam uma coleção de elementos. Estes podem ser
strings, arrays, boolean, number, function, objects e mais. */

const instrumentos = ["Guitarra", "Baixo", "Violão"];
const precos = [49, 99, 69, 89];

const dados = [
  new String("Tipo 1"),
  ["Carro", "Portas", { cor: "Azul", preco: 2000 }],
  function andar(nome) {
    console.log(`${nome} andou`);
  },
];

dados[2]("Ford"); // "Ford andou""
dados[1][2].cor; // "azul"

/* CONSTRUÇÃO DE ARRAYS */

/* Toda array herda os métodos e propriedades do protótipo do
constructor Array. */

const instrumentos2 = ["Guitarra", "Baixo", "Violão"];
const carros = new Array("Corola", "Mustang", "Honda");

carros[1]; // Mustang
carros[2] = "Ferrari";
carros[10] = "Parati";
carros.length; // 11

/* Os valores das array's não são
estáticos */

/* ARRAY.FROM() */

/* Array.from() é um método utilizado para transformar array-like
objects, em uma array. */

let li = document.querySelectorAll("li"); // NodeList
li = Array.from(li); // Array

const carros2 = {
  0: "Fiat",
  1: "Honda",
  2: "Ford",
  length: 4,
};

const carrosArray = Array.from(carros2);

/* ARRAY.ISARRAY() */

/* Verifica se o valor passado é uma array e retorna um valor
booleano. */

let li2 = document.querySelectorAll("li"); // NodeList
Array.isArray(li2); // false

li2 = Array.from(li2); // Array
Array.isArray(li2); // true

/* ARRAY.OF(), ARRAY() E NEW ARRAY() */

/* Verifica se o valor passado é uma array e retorna um valor
booleano. A palavra chave new não é necessária para utilizar o
constructor Array. */

Array.of(10); // [10]
Array.of(1, 2, 3, 4); // [1,2,3,4]
new Array(5); // [,,,,]
Array(5); // [,,,,]
Array(1, 2, 3, 4); // [1,2,3,4]

/* PROPRIEDADES E MÉTODOS DO PROTOTYPE */

/* [].length retorna o tamanho da array */

const frutas = ["Banana", "Pera", ["Uva Roxa", "Uva Verde"]];
frutas.length; // 3

frutas[0].length; // 6
frutas[1].length; // 4
frutas[2].length; // 2

/* MÉTODOS MODIFICADORES [].SORT() */

/* Os próximos métodos que vamos falar sobre, são métodos
modificadores (mutator methods), Além de retornarem um valor,
eles modificam a array original. [].sort() organiza pelo
unicode. */

const instrumentos3 = ["Guitarra", "Baixo", "Violão"];
instrumentos3.sort();
instrumentos3; // ["Baixo", "Guitarra", "Violão"]

const idades = [32, 21, 33, 43, 1, 12, 8];
idades.sort();
idades; // [1, 12, 21, 32, 33, 43, 8]

/* MÉTODOS MODIFICADORES [].UNSHIFT E [].PUSH */

/* [].unshift() adiciona elementos ao início da array e retorna o
length da mesma. [].push() adiciona elementos ao final da
array e retorna o length da mesma. */

const carros4 = ["Ford", "Fiat", "VW"];
carros4.unshift("Honda", "Kia"); // 5

carros4.push("Ferrari"); // 5
carros4; // ["Honda", "Kia", "Ford", "Fiat", "VW", "Ferrari"]

/* [].SHIFT() E [].POP() */

/* [].shift() remove o primeiro elemento da array e retorna o
mesmo. [].pop() remove o último elemento da array e retorna o
mesmo. */

const carros5 = ["Ford", "Fiat", "VW", "Honda"];
carros5.shift(); // "Ford"
carros5;

carros5.pop(); // "Honda"
carros5; // ["Fiat", "VW"]

/* [].REVERSE() */

/* [].reverse() inverte os itens da array e retorna a nova array. */

const carros6 = ["Ford", "Fiat", "VW", "Honda"];
carros6.reverse(); // ["Honda", "VW", "Fiat", "Ford"]

/* [].SPLICE() */

/* [].splice(index, remover/adicionar, item1, item2, ...) adiciona
valores na array a partir do index. Remove a quantidade de itens
que for passada no segundo parâmetro (retorna esses itens). */

const carros7 = ["Ford", "Fiat", "VW", "Honda"];
carros7.splice(1, 0, "Kia", "Mustang"); // []
carros7; // ["Ford", "Kia", "Mustang", "Fiat", "VW", "Honda"]

carros7.splice(3, 2, "Ferrari"); // ["Fiat", "VW"]
carros7; // ["Ford", "Kia", "Mustang", "Ferrari", "Honda"]

/* [].COPYWITHIN() */

/* [].copyWithin(alvo, inicio, final) a partir do alvo, ele
irá copiar a array começando do início até o final e vai preencher a
mesma com essa cópia. Caso omita os valores de início e final, ele
irá utilizar como início o 0 e final o valor total da array. */

["Item1", "Item2", "Item3", "Item4"].copyWithin(2, 0, 3);
// ["Item1", "Item2", "Item1", "Item2"]

["Item1", "Item2", "Item3", "Item4"].copyWithin(-1);
// ["Item1", "Item2", "Item3", "Item1"]

/* [].FILL() */

/* [].fill(valor, inicio, final) preenche a array com o
valor, do início até o fim */

["Item1", "Item2", "Item3", "Item4"].fill("Banana");
// ["Banana", "Banana", "Banana", "Banana"]

["Item1", "Item2", "Item3", "Item4"].fill("Banana", 2);
// ["Item1", "Item2", "Banana", "Banana"]

["Item1", "Item2", "Item3", "Item4"].fill("Banana", 1, 3);
// ["Item1", "Banana", "Banana", "Item1"]

/* MÉTODOS DE ACESSO [].CONCAT() */

/* Os métodos abaixo não modificam a array original, apenas
retornam uma array modificada, [].concat() irá concatenar a
array com o valor passado. */

const transporte1 = ["Barco", "Avião"];
const transporte2 = ["Carro", "Moto"];
const transportes = transporte1.concat(transporte2);
// ["Barco", "Avião", "Carro", "Moto"]

const maisTransportes = [].concat(transporte1, transporte2, "Van");
// ["Barco", "Avião", "Carro", "Moto", "Van"]

/* [].INCLUDES(), [].INDEXOF() E [].LASINDEXOF() */

/* [].includes(valor) verifica se a array possui o valor e retorna
true ou false. [].indexOf(valor) verifica se a array possui o 
valor e retorna o index do primeiro valor na array. Já o
[].lastIndexOf(valor) retorna o index do último. */

const linguagens = ["html", "css", "js", "php", "python", "js"];

linguagens.includes("css"); // true
linguagens.includes("ruby"); // false
linguagens.indexOf("python"); // 4
linguagens.indexOf("js"); // 2
linguagens.lastIndexOf("js"); // 5

/* [].JOIN(SEPARADOR) */

/* [].join(separador) junta todos os valores da array e retorna
uma string com eles. Se você passar um valor como parâmetro,
este será utilizado durante a junção de cada item da array */

const linguagens2 = ["html", "css", "js", "php", "python", "js"];
linguagens2.join(); // "html,css,js,php,python,js"
linguagens2.join(" "); // "html,css,js,php,python,js"
linguagens2.join("-_-"); // "html-_-css-_-js-_-php-_-python-_-js"

let htmlString = "<h2>Titulo Principal</h2>";
htmlString = htmlString.split("h2");
// ["<", ">Titulo Principal</", ">"]

htmlString = htmlString.join("section");
// "<section>Titulo Principal</section>"

/* [].SPLICE() */

/* [].splice(inicio, final) retorna os itens da array
começando pelo início até o valor de final. */

const linguagens3 = ["html", "css", "js", "php", "python"];
linguagens3.slice(3); // ["php", "python"]
linguagens3.slice(1, 4); // ["css", "js", "php"]

const cloneLinguagens = linguagens3.slice();
