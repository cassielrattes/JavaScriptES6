// FUNÇÕES

function areaQuadrado(lado) {
  return lado * lado;
}

console.log(areaQuadrado(5)); // 25

function pi() {
  return 3.14;
}

var total = 5 * pi(); // 15.7
console.log(pi(), total);

/* PARÂMENTROS E ARGUMENTOS */

/* 
Ao criar uma função, você pode definir parâmetros.
Ao executar uma função, você pode passar argumentos.
*/

function imc(peso, altura) {
  const imc = peso / altura ** 2;
  return imc;
}

console.log(imc(80, 1.8));

/* Separar por vírgula cada
parâmetro. Você pode definir
mais de um parâmetro ou nenhum
também */

/* PARÊNTESES EXECUTA A FUNÇÃO */

function corFavorita(cor) {
  if (cor === "azul") {
    return "Você gosta do céu";
  } else if (cor === "verde") {
    return "Você gosta do mato";
  } else {
    return "Você gosta de nada";
  }
}

console.log(corFavorita()); // Retorna "Você gosta de nada"

/* Se apenas definirmos a função
com o funtion e não executarmos
a mesma, nada que estiver dentro
dela irá acontecer */

/* ARGUMENTOS PODEM SER FUNÇÕES */

/* Chamadas de Callback, geralmente são funções que ocorrem após
algum evento. */

function mostraConsole() {
  console.log("Clicou");
}

addEventListener("click", mostraConsole);

// A função possui dois argumentos
// Primeiro é a string 'click'
// Segundo é uma função anônima

/* Funções anônimas são aquelas em
que o nome da função não é
definido, escritas como
function() {} ou () => {} */

/* PODE OU NÃO RETORNAR UM VALOR */

/* Quando não definimos o return, ela irá retornar undefined.
O código interno da função é executado normalmente, independente
de existir valor de return ou não. */

function imc2(peso, altura) {
  const imc = peso / altura ** 2;
  console.log(imc);
}

imc2(80, 1.8); // undefined
console.log(imc2(80, 1.8)); // Retorna o imc e undefined

/* VALORES RETORNADOS */

/* Uma função pode retornar qualquer tipo de dado e até outras
funções */

function terceiraIdade(idade) {
  if (typeof idade !== "number") {
    return "Informe sua Idade!";
  } else if (idade >= 60) {
    return true;
  } else {
    return false;
  }
}

console.log(terceiraIdade(30));

/* Cuidado, retornar diferentes
tipos de dados na mesma função
não é uma boa ideia. */

/* ESCOPO */

/* Variáveis e funções definidas dentro de um bloco {}, não são
visíveis fora dele. */

function precisoVisitar(paisesVisitados) {
  var totalPaises = 193;
  return `Ainda faltam ${totalPaises - paisesVisitados} países`;
}

// console.log(totalPaises); // erro, totalPaises não definido.

/* ESCOPO LÉXICO */

/* Funções conseguem acessar variáveis que foram criadas no 
contexto pai. */

var profissao = "Desenvolvedor";

function dados() {
  var nome = "Cassiel",
    idade = 18;
  function outrosDados() {
    var endereco = "São Paulo",
      idade = 19;
    return `${nome}, ${idade}, ${endereco}, ${profissao}`;
  }
  return outrosDados();
}

console.log(dados()); // Retorna 'Cassiel, 19, São Paulo, Desenvolvedor'
// console.log(outrosDados()); // Retorna um erro

/* HOISTING */

/* Antes de executar uma função, o JS 'move' todas as funções
declaradas para a memória. */

imc(80, 1.8); // imc aparece no console
