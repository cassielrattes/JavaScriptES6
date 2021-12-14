// CEP

const regexpCEP = /\d{5}([-\s]+)?\d{3}/g;
const ceps = ["00000-000", "00000  000", "00000000"];

for (cep of ceps) {
  console.log("cep", cep, cep.match(regexpCEP));
}

// CPF

const regexpCPF = /(?:\d{3}[-.]?){3}\d{2}/g;
const cpfs = [
  "000.000.000-00",
  "000-000-000-00",
  "000000000-00",
  "00000000000",
];

for (cpf of cpfs) {
  console.log("cpf", cpf, cpf.match(regexpCPF));
}

// CPNJ

const regexpCNPJ = /\d{2}[-.\s]?(?:\d{3}[-.\s]?){2}[-\/\s]?\d{4}[-.\s]?\d{2}/g;

const cnpjs = [
  "00.000.000/0000-00",
  "00000000000000",
  "00-000-000-0000-00",
  "00.000.000/000000",
  "00.000.000.000000",
  "00.000.000.0000.00",
];

for (cnpj of cnpjs) {
  console.log("cnpj", cnpj, cnpj.match(regexpCNPJ));
}

// TELEFONE

const regexpTELEFONE = /(?:\+?55\s?)?(?:\(?\d{2}\)?[\s-]?)?\d{4,5}[\s-]?\d{4}/g;

const telefones = [
  "+55 11 98888-8888",
  "+55 11 98888 8888",
  "+55 11 988888888",
  "+55 11988888888",
  "+5511988888888",
  "5511988888888",
  "11 98888-8888",
  "11 98888 8888",
  "(11) 98888-8888",
  "(11) 98888 8888",
  "11-98888-8888",
  "11 98888 8888",
  "11988888888",
  "988888888",
  "(11)988888888",
  "98888 8888",
  "8888 8888",
];

for (telefone of telefones) {
  console.log("Telefone", telefone, telefone.match(regexpTELEFONE));
}

// EMAIL

const regexpEMAIL = /[\w.-]+@[\w-]+\.[\w.-]+/gi;

const emails = [
  "email@email.com",
  "email@email.com.org",
  "email-email@email.com",
  "email_email@email.com",
  "email.email23@email.com.br",
  "email.email23@empresa-sua.com.br",
  "c@contato.cc",
];

for (email of emails) {
  console.log("Email", email, email.match(regexpEMAIL));
}
