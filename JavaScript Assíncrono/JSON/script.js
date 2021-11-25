// JSON

/* JavaScript Object Notation (JSON) é um formato de organização
de dados, compostos por um conjunto de chave e valor. As aspas
duplas são obrigatórias, tanto na chave quanto no valor quando
este for uma string. */

// {
//     "id": 1,
//     "nome": "Cassiel",
//     "email": "cassielrattes@gmail.com"
// }

// VALORES

/* Os valores podem ser números, strings, boolean, arrays, objetos e
null. */

// {
//     "id":1,
//     "faculdade":true,
//     "pertences": [
//         "lapis",
//         "caneta",
//         "caderno"
//     ],
//     "endereco": {
//         "cidade": "Rio de Janeiro",
//         "pais": "Brasil"
//     },
//     "casado":null
// }

// ARRAYS E OBJETOS

/* É comum possuirmos array's com objetos em cada valor da array.
Cuidado para não colocar virgula no último item do objeto ou array. */

// [
//     {
//         "id": 1,
//         "aula": "JavaScript",
//         "tempo": "25min"
//     },
//     {
//         "id": 2,
//         "aula": "HTML",
//         "tempo": "15min"
//     },
//     {
//         "id": 3,
//         "aula": "CSS",
//         "tempo": "10min"
//     }
// ]

fetch("./aula.json")
  .then((r) => r.json())
  .then((data) => {
    data.forEach((materia) => {
      console.log(materia.aula);
    });
  });

// JSON.PARSE() E JSON.STRINGIFY

/* JSON.parse() irá transformar um texto JSON em um objeto
JavaScript. JSON.stringify() irá transformar um objeto
JavaScript em uma string no formato JSON. */

const textoJSON = `[
    {
        "id": 1,
        "aula": "JavaScript",
        "tempo": "25min"
    },
    {
        "id": 2,
        "aula": "HTML",
        "tempo": "15min"
    },
    {
        "id": 3,
        "aula": "CSS",
        "tempo": "10min"
    }
]`;

const textoOBJ = JSON.parse(textoJSON);

const enderecoOBJ = {
  cidade: "Indaiatuba",
};

const enderecoJSON = JSON.stringify(enderecoOBJ);

console.log(textoOBJ, enderecoJSON);

// EXEMPLO REAL

/* Podemos guardar por exemplo no localStorage, uma string como
valo de uma propriedade. e retornar essa string como um objeto. */

const config = {
  player: "Google API",
  tempo: 25.5,
  aula: "2-1 JavaScript",
  vitalicio: true,
};

localStorage.config = JSON.stringify(config);
const getConfig = JSON.parse(localStorage.config);
console.log(getConfig);
