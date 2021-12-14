const cpfsList = document.querySelectorAll(".cpf li");

const elementsInnerText = ([...elements]) => {
  return elements.map((element) => element.innerText);
};

const limparCPF = (cpf) => {
  return cpf.replace(/\D/g, "");
};

const construirCPF = (cpf) => {
  return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/g, "$1.$2.$3-$4");
};

const formatarCPFS = (cpfs) => {
  return cpfs.map(limparCPF).map(construirCPF);
};

const substituiCPFS = (cpfsElements) => {
  const cpfs = elementsInnerText(cpfsElements);
  const cpfsFormatados = formatarCPFS(cpfs);

  cpfsElements.forEach((el, index) => {
    el.innerText = cpfsFormatados[index];
  });
};

substituiCPFS(cpfsList);
