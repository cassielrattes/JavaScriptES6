// APPLICATION

/* Um servidor, aplicativo, objeto JavaScript ou qualquer outra coisa que você
interaja através de comandos. Ao digitar uma URL, estamos utilizando a API
do browser para se comunicar com a API do servidor. */

// PROGRAMMING

/* Programação, isso significa que um comando que irá encadear uma cadeia de
eventos pré-definidos. O resultado esperado é geralmente o mesmo. */

// INTERFACE

/* A interface são os comandos criados para permitir a interação com a
aplicação. Ex: 'VIOLAO'.toLowerCase() é um método que faz parte da
interface do objeto String. A interação com a interface retorna um
efeito/resposta. */

// EXEMPLOS DE API'S

/* GITHUB */

/* 
https://api.github.com/users/origamid 
https://api.github.com/users/origamid/followers
*/

/* ARRAY / ELEMENT */

/* 
[].map();
[].filter();
Element.classList;
Element.attributes;
*/

/* TEMPO */

/*
https://www.metaweather.com//api/location/455825/
https://github.com/toddmotto/public-apis
*/

// HTTP

/* Hypertext Transfer Protocol é o protocolo utilizado para
enviarmos/recebermos arquivos e dados na web. */

fetch("https://pokeapi.co/api/v2/pokemon/")
  .then((r) => r.json())
  .then((pokemon) => console.log(pokemon.results));

// URL E METHOD

/* Uma requisição HTTP é feita através de uma URL. O método padrão
é o GET. mas existem outros como POST, UPDATE, DELETE,
HEADER. */

const url = "https://jsonplaceholder.typicode.com/posts/";
const options = {
  method: "POST",
  headers: {
    "Content-Type": "application/json; charset=utf-8",
  },
  body: JSON.stringify({
    aula: "JavaScript",
  }),
};

fetch(url, options)
  .then((r) => r.json())
  .then((json) => {
    console.log(json);
  });

// METHOD

/* GET */

/* Puxa informação, utilizado para pegar posts, usuários etc. */
/* GET irá puxar as informações da URL. Não é necessário informar
que o método é GET, pois este é o padrão. */

fetch(url, {
  method: "GET",
})
  .then((r) => r.json())
  .then((r) => console.log(r));

/* POST */

/* Utilizado para criar posts, usuários e etc. */
/* POST irá criar uma nova postagem, utilizando o tipo de conteúdo
especificado no headers e utilizando o conteúdo do body. */

const options1 = {
  method: "POST",
  headers: {
    "Content-Type": "application/json; charset=utf-8",
  },
  body: JSON.stringify({
    aula: "JavaScript",
  }),
};

fetch(url, options1)
  .then((r) => r.json())
  .then((json) => {
    console.log(json);
  });

/* PUT */

/* Geralmente utilizado para atualizar informações. */
/* PUT irá atualizar o conteúdo do URL com o que for informado no
conteúdo do body. */

const url1 = "https://jsonplaceholder.typicode.com/posts/2"; // {id}
const options2 = {
  method: "PUT",
  headers: {
    "Content-Type": "application/json; charset=utf-8",
  },
  body: JSON.stringify({
    aula: "JavaScript",
  }),
};

fetch(url1, options2)
  .then((r) => r.json())
  .then((json) => {
    console.log(json);
  });

/* DELETE */

/* Deleta uma informação. */

/* HEAD */

/* Puxa apenas os headers. */
/* HEAD puxa apenas os headers. É uma requisição mais leve pois
não puxa o body. */

fetch(url, {
  method: "HEAD",
})
  .then((r) => r)
  .then((r) => r.headers.forEach(console.log));

// HEADERS

/* CACHE-CONTROL */

/* Tempo que o arquivo deve ficar em cache em segundos. Ex: public,
max-age=3600 */

/* CONTENT-TYPE */

/* Tipo de conteúdo. Ex: text/html; charset=utf-8. Indicar o tipo de arquivo
principalmente em métodos POST e PUT. */

/* LISTA DE HEADERS */

/* https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers */

// CORS

/* Cross-Origin Resource Sharing, gerencia como deve ser o
compartilhamento de recursos entre diferentes origins.

É definido no servidor se é permitido ou não o acesso dos recursos
através de scripts por outros sites. Utilizando o 
Access-Control-Allow-Origin. 

Se o servidor não permitir o acesso, este será bloqueado. É
possível passar por cima do bloqueio utilizando um proxy.

CORS é um acordo entre browser / servidor ou servidor / servidor.
Ele serve para dar a certa proteção ao browser, mas não é inviolável. */

const url_ = "https://cors-anywhere.herokuapp.com/https://www.google.com";
const div = document.createElement("div");

fetch(url_)
  .then((r) => r.text())
  .then((r) => {
    div.innerHTML = r;
  });
