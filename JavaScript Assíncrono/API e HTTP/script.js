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
