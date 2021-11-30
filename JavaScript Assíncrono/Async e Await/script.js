// ASYNC / AWAIT

/* A palavra chave async indica que a função possui partes
assíncronas e que você pretende esperar a resolução da mesma
antes de continuar. O await irá indicar a promise que devemos 
esperar. Faz parte do ES8. */

async function puxarDados() {
  const dadosResponse = await fetch("./dados.json");
  const dadosJSON = await dadosResponse.json();

  document.body.innerText = dadosJSON.title;
}

puxarDados();

// THEN / ASYNC

/* A diferença é uma sintaxe mais limpa. */

function iniciarFetch() {
  fetch("./dados.json")
    .then((dadosResponse) => dadosResponse.json())
    .then((dadosJSON) => console.log(dadosJSON));
}

iniciarFetch();

async function iniciarAsync() {
  const dadosResponse = await fetch("./dados.json");
  const dadosJSON = await dadosResponse.json();
  console.log(dadosJSON);
}

iniciarAsync();

// TRY / CATCH

/* Para lidarmos com erros nas promises, podemos utilzar o try e o 
catch na função */

async function puxarDados1() {
  try {
    const dadosResponse = await fetch("./dados.json");
    const dadosJSON = await dadosResponse.json();
    console.log(dadosJSON);
  } catch (error) {
    console.log(error);
  }
}
puxarDados1();

// INICIAR FETCH AO MESMO TEMPO

/* Não precisamos esperar um fetch para começarmos outro. Porém
precisamos espera a resposta resolvida do fetch para 
transformarmos a response em json. */

async function iniciarAsync1() {
  const dadosResponse = await fetch("./dados.json");
  const clientesResponse = await fetch("./clientes.json");

  const dadosJSON = await dadosResponse.json();
  const clientesJSON = await clientesResponse.json();
  console.log(dadosJSON, clientesJSON);
}
iniciarAsync1();

// PROMISE

/* O resultado da expressão à frente de await tem que ser uma
promise. E o retorno do await será sempre o resultado desta
promise. */

async function asyncSemPromise() {
  await setTimeout(() => {
    console.log("dps de 1 seg");
  }, 1000);
  console.log("acabou");
}
asyncSemPromise();

async function iniciarAsync2() {
  await new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, 1000);
  });
  console.log("dps de 1 segundo");
}
iniciarAsync2();

// const p = document.querySelectorAll("p");

// let array = [];
// p.forEach((pGeral, paragrafoIndex) => {
//   const split = pGeral.textContent.split("{");
//   const splitParagrafo = split.map((p) => {
//     if (p.includes("}")) return p.trim().split("}");
//     return p.trim();
//   });

//   splitParagrafo.forEach((pSecundario, index) => {
//     if (pSecundario instanceof Array) {
//       const [text, href] = [...pSecundario[0].split("|")];
//       const lista = `<a href="${href}" target="_blank">${text}</a>
//         ${pSecundario[pSecundario.length - 1]}`.trim();
//       array[index] = lista;
//     } else {
//       array[index] = pSecundario;
//     }
//   });

//   p[paragrafoIndex].innerHTML = array.join(" ");
// });
