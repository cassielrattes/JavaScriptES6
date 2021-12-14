import ValidarCPF from "./valida-cpf.js";

const cpf = document.querySelector("#cpf");
const validarCPF = new ValidarCPF(cpf).iniciar();
console.log(validarCPF);
