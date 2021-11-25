// NEW PROMISE()

/* Promise é uma função construtora de promessa.
Existem dois resultados possíveis de uma promessa,
ela pode ser resolvida, com a execução do primeiro
argumento, ou rejeitada se o segundo argumento 
for ativado. */

const promessa = new Promise((resolve, reject) => {
  let condicao = true;
  if (condicao) {
    resolve("Cassiel");
  } else {
    reject(Error("Erro"));
  }
});

console.log(promessa);

// THEN()

/* O poder das Promises está no método then() 
do seu protótipo. O Callback deste método só
será ativado quando a promise for resolvida.
O argumento do callback será o valor passado
na função resolve. */

promessa.then((resolucao) => console.log(resolucao));

// ASSÍNCRONO

/* As promises não fazem sentido quando o código
executado dentro da mesma é apenas código síncrono.
O poder está na execução de código assíncrono que
executará o resolve() ao final dele. */

const promessa1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Resolvida");
  }, 1000);
});

promessa1.then((resolucao) => console.log(resolucao));

// THEN().THEN()

/* O método then() retorna outra Promise. Podemos colocar
then() após then() e fazer um encadeamento de promessas.
O valor do primeira argumento de cada then, será o valor do
retorno anterior. */

const promessa2 = new Promise((resolve, reject) => {
  resolve("Etapa 1");
});

promessa2
  .then((resolucao) => {
    console.log(resolucao); // "Etapa 1"
    return "Etapa 2";
  })
  .then((resolucao) => {
    console.log(resolucao); // "Etapa 2"
    return "Etapa 3";
  })
  .then((r) => r + 4)
  .then((r) => {
    console.log(r); // "Etapa 34"
  });

// CATCH()

/* O método catch(), do protótipo de Promises, adiciona um
callback a promise que será ativado caso a mesma seja rejeitada. */

const promessa3 = new Promise((resolve, reject) => {
  let condicao = false;
  if (condicao) {
    resolve("Cassiel");
  } else {
    reject(Error("Erro"));
  }
});

promessa3
  .then((resolucao) => {
    console.log(resolucao);
  })
  .catch((reject) => {
    console.log(reject);
  });

// THEN(RESOLVE, REJECT)

/* Podemos passar a função que será ativada caso a promise 
seja rejeitada, direto no método then, como segundo argumento. */

promessa3.then(
  (resolucao) => {
    console.log(resolucao);
  },
  (reject) => {
    console.log(reject);
  }
);

// FINALLY()

/* finally() executará a função anônima assim que a promessa
acabar. A diferença do finally é que ele será executado
independente do resultado, se for resolvida ou rejeitada. */

promessa3
  .then((resolucao) => {
    console.log(resolucao);
  })
  .catch((reject) => {
    console.log(reject);
  })
  .finally(() => {
    console.log("Finally");
  });

// PROMISE.ALL()

/* Retornará uma nova promise assim que todas as promises
dentro dela forem resolvidas ou pelo menos uma rejeitada.
A resposta é uma array com as respostas de cada promise. */

const login = new Promise((resolve) => {
  setTimeout(() => {
    resolve("Login Efetuado");
  }, 1000);
});

const dados = new Promise((resolve) => {
  setTimeout(() => {
    resolve("Dados Carregados");
  }, 500);
});

const tudoCarregado = Promise.all([login, dados]);

tudoCarregado.then((respostas) => console.log(respostas));

// PROMISE.RACE()

/* Retornará uma nova promise assim que a primeira promise
for resolvida ou rejeitada. Essa nova promise terá a 
resposta da primeira resolvida. */

const carregouPrimeiro = Promise.race([login, dados]);

carregouPrimeiro.then((resposta) => console.log(resposta));
