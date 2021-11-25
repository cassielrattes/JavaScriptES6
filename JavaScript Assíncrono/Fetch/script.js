// FETCH API

/* Permite fazermos requisições HTTP através do método
fetch(). Este método retorna a resolução de uma Promise.
Podemos então utilizar o then para interagirmos com a resposta,
que é um objeto do tipo Response. */

fetch("./arquivo.txt").then((res) => {
  console.log(res); // Response HTTP (Objeto)
});

// RESPONSE

/* O objeto Response, possui um corpo com o conteúdo da resposta.
Esse corpo pode ser transformado utilizando métodos do protótipo
do objeto Response. Estes retornam outras promises. */

fetch("./arquivo.txt")
  .then((res) => res.text())
  .then((res) => console.log(res));

// SERVIDOR LOCAL

/* O fetch faz uma requisição HTTP/HTTPS. Se você iniciar um site
local diretamente pelo index.html, sem um servidor local, o fetch
não irá funcionar. */

/* Se dermos um espaço após o
objeto ou pularmos linha, o
método continua funcionando. */

// .TEXT()

/* Podemos utilizar o .text() para diferentes formatos como txt, json
html, css, js e mais.  */

// .JSON()

/* Um tipo de formato de dados muito utilizado com JavaScript é o
JSON (JavaScript Object Notation), pelo fato dele possuir basicamente
a mesma sintaxe que a de um objeto js. .json() transforma um corpo
em json em um objeto JavaScript. */

fetch("https://viacep.com.br/ws/01001000/json/")
  .then((r) => r.json())
  .then((cep) => console.log(cep.bairro, cep.logradouro));

// HTML E TEXT()

/* Podemos pegar um arquivo inteiro em HTML, transformar o corpo
em texto e inserir em uma div com o innerHTML. A partir dai
podemos manipular esses dados como um DOM qualquer. */

const div = document.createElement("div");

fetch("./sobre.html")
  .then((r) => r.text())
  .then((html) => {
    div.innerHTML = html;
    const titulo = div.querySelector("h1");
    document.querySelector("h1").innerText = titulo.innerText;
  });

// .BLOB()

/* Um blob é um tipo de objeto utilizado para representação de
dados de um arquivo. O blob pode ser utilizado para transformarmos
requisições de imagens por exemplo. O blob gera um URL único. */

const div1 = document.createElement("div");

fetch("./img.png")
  .then((r) => r.blob())
  .then((blob) => {
    const blobUrl = URL.createObjectURL(blob);
    const img = document.querySelector("img");
    img.src = blobUrl;
    console.log(blobUrl);
  });

// .CLONE()

/* Ao utilizarmos os métodos acima, text, json e blob, a resposta é
modificada. Por isso existe o método clone, caso você necessite 
transformar uma resposta em diferentes valores. */

const div2 = document.createElement("div");

fetch("https://viacep.com.br/ws/01001000/json/").then((r) => {
  const clone = r.clone();
  r.json().then((json) => {
    console.log(json);
  });

  clone.text().then((text) => {
    console.log(text);
  });
});

// .HEADERS

/* É uma propriedade que possui os cabeçalhos de uma requisição.
É um tipo de dado iterável então podemos utilizar o forEach para
vermos cada um deles. */

fetch("https://viacep.com.br/ws/01001000/json/").then((r) => {
  r.headers.forEach(console.log);
});

// .STATUS E .OK

/* Retorna o status da requisição. Se foi 404, 200, 202 e mais. ok
retorna um valor booleano sendo true para uma requisição de sucesso
e false para uma sem sucesso. */

fetch("https://viacep.com.br/ws/01001000/json/").then((r) => {
  console.log(r.status, r.ok);
  if (r.status === 404) {
    console.log("pagina não encontrada");
  }
});

// .URL E .TYPE

/* .url retorna o url da requisição. .type retorna o tipo da resposta. */

fetch("https://viacep.com.br/ws/01001000/json/").then((r) => {
  console.log(r.type, r.url);
});
