// SUBCLASSES

/* É possível criarmos uma subclasse, esta irá ter acesso aos
métodos da classa à qual ela estendeu através do seu protótipo. */

class Veiculo {
  constructor(rodas, combustivel) {
    this.rodas = rodas;
    this.combustivel = combustivel;
  }
  acelerar() {
    console.log("Acelerou", this.combustivel, this.rodas);
  }
}

// class Moto extends Veiculo {
//   empinar() {
//     console.log("Empinou com " + this.rodas + " rodas");
//   }
// }

// const moto = new Moto(4);
// moto.acelerar();
// moto.empinar();

// MÉTODOS

/* Podemos escrever por cima de um método herdado. */

// class Moto extends Veiculo {
//   empinar() {
//     console.log("Empinou com " + this.rodas + " rodas");
//   }
//   acelerar() {
//     console.log("Moto acelerou");
//   }
// }

// const moto = new Moto(4);
// moto.acelerar();
// moto.empinar();

// SUPER

/* É possível utilizar a palavra chave super para falarmos com a
classe que é pai e acessarmos os seus métodos e propriedades. */

// class Moto extends Veiculo {
//   acelerar() {
//     super.acelerar();
//     console.log("Muito");
//   }
// }

// const moto = new Moto(4);
// moto.acelerar();

// SUPER E CONSTRUCTOR

/* Podemos utilizar o super para estendermos o método constructor. */

class Moto extends Veiculo {
  constructor(rodas, combustivel, capacete) {
    super(rodas, combustivel);
    this.capacete = capacete;
  }
  acelerar() {
    super.acelerar();
    console.log(this.capacete);
  }
}

const moto = new Moto(4, "gasolina", true);
moto.acelerar();
