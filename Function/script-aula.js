const paragrafos = document.querySelectorAll("p");
const arrayParagrafos = Array.prototype.reduce.call(
  paragrafos,
  (acc, item) => {
    return acc + item.innerText.length;
  },
  0
);

console.log(arrayParagrafos);

function criarElemento(tag, classe, conteudo) {
  const elemento = document.createElement(tag);
  classe ? elemento.classList.add(classe) : null;
  conteudo ? (elemento.innerHTML = conteudo) : null;
  return elemento;
}

console.log(criarElemento("li", "azul", "kk piadas"));

const h1 = criarElemento.bind(null, "h1", "titulo");

console.log(h1("testando"));
