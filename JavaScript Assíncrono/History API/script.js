// HISTORY

/* É possível acessarmos o histórico de acesso do browser em uma
sessão específica através do window.history. O objeto history
possui diferentes métodos e propriedades. */

// window.history;
// window.history.back();
// window.history.forward();
// window.history.pushState(null, null, "teste.html");

// PUSHSTATE()

/* A parte interessante de manipularmos o history é que podemos
modificar o histórico e adicionar um novo item.
window.history.pushState(obj, title, url) */

// Em obj podemos enviar um objeto com dados
// mas o seu uso é restrito por isso geralmente utilizamos
// null. O title é ignorado por alguns browsers, também
// utilizamos null nele. O url que é parte importante.

// window.history.pushState(null, null, "sobre.html");

// POPSTATE

/* O evento popstate pode ser adicionado ao objeto window.
Assim podemos executar uma função toda vez que o usuário clicar
no botão de voltar ou próximo. */

// window.addEventListener("popstate", () => {
// fetchPage(window.location.pathname);
//   console.log("texte");
// });

// FETCH E HISTORY

/* Ao puxarmos dados via fetch API, o url da página continua o
mesmo. Ao combinar fetch com a history api conseguimos simular
uma navegação real entre páginas, sem a necessidade de
recarregamento da mesma. */

async function fetchPage(url) {
  const pageResponse = await fetch(url);
  const pageText = await pageResponse.text();
  replaceContent(pageText);
}

function replaceContent(text) {
  const newHtml = document.createElement("div");
  newHtml.innerHTML = text;
  const oldContent = document.querySelector(".content");
  const newContent = newHtml.querySelector(".content");
  oldContent.innerHTML = newContent.innerHTML;
  document.title = newHtml.querySelector("title").innerText;
}

function handleClick(e) {
  e.preventDefault();
  fetchPage(e.target.href);
  window.history.pushState(null, null, e.target.href);
}

window.addEventListener("popstate", () => {
  fetchPage(window.location.href);
});

const links = document.querySelectorAll("a");
links.forEach((x) => {
  x.addEventListener("click", handleClick);
});
