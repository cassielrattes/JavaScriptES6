export default class ValidarCPF {
  constructor(element) {
    this.element = element;
  }

  limpar(cpf) {
    return cpf.replace(/\D/g, "");
  }

  construir(cpf) {
    return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/g, "$1.$2.$3-$4");
  }

  formatar(cpf) {
    const cpfLimpo = this.limpar(cpf);
    return this.construir(cpfLimpo);
  }

  validar(cpf) {
    const match = cpf.match(/(?:\d{3}[-.\s]?){3}\d{2}/g);
    return match && match[0] === cpf;
  }

  validarNaMudanca(cpfELement) {
    if (this.validar(cpfELement.value)) {
      cpfELement.value = this.formatar(cpfELement.value);
      cpfELement.classList.add("valido");
      cpfELement.classList.remove("erro");
      cpfELement.nextElementSibling.classList.remove("ativar");
    } else {
      cpfELement.classList.add("erro");
      cpfELement.classList.remove("valido");
      cpfELement.nextElementSibling.classList.add("ativar");
    }
  }

  adicionarErroSpan() {
    const error = document.createElement("span");
    error.classList.add("erro");
    error.innerText = "CPF INVALIDO";
    this.element.parentElement.insertBefore(
      error,
      this.element.nextElementSibling
    );
  }

  adicionarEvento() {
    this.element.addEventListener("change", () => {
      this.validarNaMudanca(this.element);
    });
  }

  iniciar() {
    this.adicionarEvento();
    this.adicionarErroSpan();
    return this;
  }
}
