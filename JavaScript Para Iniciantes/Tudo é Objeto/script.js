// TUDO É OBJETO

/* Strings, Números, Boolean, Objetos e mais, possuem propriedades
e métodos. Por isso são objetos. */

var nome = "Cassiel";

console.log(
  nome.length, // 7
  nome.charAt(1), // 'a'
  nome.replace("as", "teste"), // "Ctestesiel"
  nome // "Cassiel"
);

/* Uma string herda propriedades e
métodos do constructor String() */

/* NÚMEROS */

var altura = 1.8;

console.log(
  altura.toString(), // "1.8"
  altura.toFixed() // "2"
);

/* Por um breve momento o número é
envolvido em um Objeto
(coerção), tendo acesso assim as
suas propriedades e métodos */

/* FUNÇÕES */

function areaQuadrado(lado) {
  return lado * lado;
}

console.log(
  areaQuadrado.toString(),
  /* function areaQuadrado(lado) {
  return lado * lado;
  } */
  areaQuadrado.length // 1
);

/* ELEMENTOS DO DOM */

var btn = document.querySelector(".btn");
console.log(btn.innerText); // "Clique"
btn.addEventListener("click", function (e) {
  e.preventDefault();
  btn.classList.add("azul"); // adiciona a classe "azul"
  console.log("Clicou");
});

/* Praticamente todos os efeitos
com JS são feitos utilizando propriedades e métodos de
objetos do DOM. */
