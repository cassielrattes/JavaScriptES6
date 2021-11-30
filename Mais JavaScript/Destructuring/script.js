// DESTRUCTURING

/* Permite a desestruturação de Arrays e Objetos. Atribuindo suas
propriedades à nova variáveis. */

const carro = {
  marca: "fiat",
  ano: 2018,
  portas: 4,
};

const { marca, ano } = carro;

console.log(marca); // fiat
console.log(ano); // 2018

// DESTRUCTURING OBJECTS

/* A desestruturação irá facilitar a manipulação de dados.
Principalmente quando temos uma grnade profundidade de
objetos. */

const cliente = {
  nome: "Cassiel",
  compras: {
    digitais: {
      livros: ["Livro 1", "Livro 2"],
      videos: ["Video JS", "Video HTML"],
    },
    fisicas: {
      cadernos: ["Caderno 1"],
    },
  },
};

// console.log(cliente.compras.digitais.livros);
// console.log(cliente.compras.digitais.videos);

// const { livros, videos } = cliente.compras.digitais;

// console.log(livros, videos);

// NESTING

/* É possível aninhar uma desestruturação dentro de outra */

const {
  fisicas,
  digitais,
  digitais: { livros, videos },
} = cliente.compras;

console.log(fisicas);
console.log(digitais);
console.log(livros);
console.log(videos);

// NOME DAS VARIÁVEIS

/* É necessário indicar o noem da propriedade que você deseja
desestruturar de um objeto. É possível mudar o nome da variável
final com: */

const cliente1 = {
  nome: "Cassiel",
  compras: 10,
};

const { nome, compras } = cliente1;
// ou
const { nome: nomeCliente, compras: comprasCliente } = cliente1;

// VALOR INICIAL

/* Caso a propriedade não exista o valor padrão dela será
undefined. É possível modificar este valor no momento da
desestruturação. */

const { email = "email@gmail.com", cpf } = cliente1;
console.log(email, cpf);

// DESTRUCTURING ARRAYS

/* Para desestrutura array's você deve colocar as variáveis entre []
colchetes. */

const frutas = ["Banana", "Uva", "Morando"];

const primeiraFruta = frutas[0];
const segundaFruta = frutas[1];
const terceiraFruta = frutas[2];

// com destructuring
const [primeira, segunda, terceira] = frutas;

// DECLARAÇÃO DE VARIÁVEIS

/* A desestruturação pode servir para declararmos uma sequência de
variáveis. */

const primeiro1 = "Item 1";
const segundo1 = "Item 2";
const terceiro1 = "Item 3";
// ou
const [primeiro2, segundo2, terceiro2] = ["Item 1", "Item 2", "Item 3"];

// ARGUMENTO DESESTRUTURADO

/* Se uma função espera receber como argumento um objeto,
podemos desestruturar ele no momento da declaração. */

function handleKeyboard(event) {
  console.log(event.key);
}
// ou

function handleKeyboard({ key }) {
  console.log(key);
}

document.addEventListener("keyup", handleKeyboard);

// PARÂMETROS

/* Nem todos os parâmetros que definimos são utilizados quando
uma função é executada, devido a falta de argumentos, Por isso é
importante nos prepararmos para caso estes argumentos não 
sejam declarados. */

function perimetroForma(
  lado,
  totalLados
  // = 4
) {
  // totalLados = totalLados || 4;
  return lado * totalLados;
}
console.log(perimetroForma(10, 4)); // 40
console.log(perimetroForma(10)); // NaN

// ARGUMENTS

/* A palavra chave arguments é um objeto Array-like criado dentro
da função. Esse objeto contém os valores dos argumentos. */

function perimetroForma1(lado, totalLados = 4) {
  console.log(arguments);
  return lado * totalLados;
}
console.log(perimetroForma1(10, 4)); // 40
console.log(perimetroForma1(10)); // NaN

// PARÂMETRO REST

/* É possivel declararmos um parâmetro utilizando ... na frente
do mesmo. Assim todos os argumentos que passarmos na ativação
da função, ficarão dentro do parâmetro. */

function anunciarGanhadores(...ganhadores) {
  ganhadores.forEach((ganhador) => {
    console.log(ganhador + " ganhou");
  });
}

anunciarGanhadores("Pedro", "Marta", "Maria");

// ÚNICO REST

/* Só é possível ter um único parâmetro rest e ele deve ser o último. */

function anunciarGanhadores1(premio, ...ganhadores) {
  ganhadores.forEach((ganhador) => {
    console.log(ganhador + " ganhou um " + premio);
  });
}

anunciarGanhadores1("Carro", "Pedro", "Marta", "Maria");

// REST VS ARGUMENTS

/* Apesar de parecidos o parâmetro rest e a palavra arguments
possuem grandes diferenças. Sendo rest uma array real e
arguments um objeto Array-like. */

function anunciarGanhadores2(premio, ...ganhadores) {
  console.log(ganhadores);
  console.log(arguments);
}

anunciarGanhadores2("Carro", "Pedro", "Marta", "Maria");

// OPERADOR SPREAD

/* Assim como o rest, o operador Spread também utiliza os ... para
ser ativado. O spread irá distribuir um item iterável, um por um. */

const frutas1 = ["Banana", "Uva", "Morango"];
const legumes = ["Cenoura", "Batata"];
const comidas = [...frutas1, "Pizza", ...legumes];
console.log(comidas);

// SPREAD ARGUMENT

/* O Spread pode ser muito útil para funções que recebem uma lista
de argumentos ao invés de uma array. */

const numeroMaximo = Math.max(4, 5, 20, 10, 30, 2, 33, 5); // 33

const listaNumeros = [1, 13, 21, 12, 55, 2, 3, 43];
const numeroMaximoSpread = Math.max(...listaNumeros);

console.log(numeroMaximo, numeroMaximoSpread);

// TRANSFORMAR EM ARRAY

/* É possível transformar itens iteráveis em uma array real com o 
spread. */

const btns = document.querySelectorAll("button");
const btnsArray = [...btns];
console.log(btnsArray);

const frase = "Isso é JavaScript";
const fraseArray = [...frase];
console.log(fraseArray);
