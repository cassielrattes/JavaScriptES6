// Utilizando o foreach na array abaixo,
// some os valores de Taxa e os valores de Recebimento

const transacoes = [
  {
    descricao: "Taxa do Pão",
    valor: "R$ 39",
  },
  {
    descricao: "Taxa do Mercado",
    valor: "R$ 129",
  },
  {
    descricao: "Recebimento de Cliente",
    valor: "R$ 99",
  },
  {
    descricao: "Taxa do Banco",
    valor: "R$ 129",
  },
  {
    descricao: "Recebimento de Taxa Cliente",
    valor: "R$ 49",
  },
];

let taxaTotal = 0;
let recebimentoTotal = 0;
transacoes.forEach((item) => {
  const numeroLimpo = +item.valor.replace("R$ ", "");
  if (item.descricao.includes("Taxa")) {
    taxaTotal += numeroLimpo;
  } else if (item.descricao.includes("Recebimento")) {
    recebimentoTotal += numeroLimpo;
  }
});
console.log(taxaTotal, recebimentoTotal);

// Retorne uma array com a lista abaixo
const transportes = "Carro;Avião;Trem;Ônibus;Bicicleta";
const arrayTransporte = transportes.split(";");
console.log(arrayTransporte);

// Substitua todos os span's por a's
let html = `<ul>
                <li><span>Sobre</span></li>
                <li><span>Produtos</span></li>
                <li><span>Contato</span></li>
              </ul>`;

// html = html.split("span").join("a");
html = html.replaceAll("span", "a");
console.log(html);

// Retorne o último caracter da frase
const frase2 = "Melhor do ano!";
console.log(frase2[frase2.length - 1]);
console.log(frase2.slice(-1));

// Retorne o total de taxas
const transacoes2 = [
  "Taxa do Banco",
  "   TAXA DO PÃO",
  "  taxa do mercado",
  "depósito Bancário",
  "TARIFA especial",
];

let taxasTotal = 0;
transacoes2.forEach((item) => {
  item = item.toLowerCase().includes("taxa");
  console.log(item);
  if (item) {
    taxasTotal++;
  }
});

console.log(taxasTotal);
