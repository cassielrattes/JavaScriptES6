// REGULAR EXPRESSION

/* Regexp ou Regex são expressões utilizadas para realizarmos
buscas / substituições de padrões em strings. Os padrões devem
ser colocardo entre //. Geralmente vamos utilizá-las nos
métodos .replace() e .split(). */

// Procura: a
const padraRegexp = /a/;

const texto = "JavaScript";
const novoTexto = texto.replace(padraRegexp, "B"); // JBvaScript

// P raticamente todas as linguagens
// possuem uma implementação de
// regexp

// LITERAL

/* Utilizar um caracter literal irá realizar uma busca específica deste
caracter */

// Procura J seguido de a,v e a
const regexp = /Java/;

"JavaScript".replace(regexp, "Type");
// TypeScript

// FLAG: G

/* As flags irão modificar como a expressão é interpretada. Uma das
mais utilizadas é a g, que significa global, ou seja, retorne todos os
resultados que estiverem dentro do padrão e não apenas o
primeiro. A flag deve ser colocada no final da expressão. */

const regexp1 = /a/g;

"JavaScript".replace(regexp1, "i");

// FLAG: I

/* Com o i informamos que devem ser ignoradas as diferenças
entre maiúsculas e minúsculas. Isso significa que /a/ irá buscar
por a e A. */

// Procura: toda PE, Pe, pE e pe
const regexp2 = /Pe/gi;

"Perdeu perdido".replace(regexp2, "Ba");
// Bardeu Bardido

// CHARACTER CLASS

/* Se colocarmos os caracteres entre colchetes, estamos definindo
uma classe. /[ab]/ irá procurar por a ou por b. */

// Procura: Todo a, A, i, I
const regexp3 = /[ai]/gi;

"JavaScript".replace(regexp3, "u");
// JuvuScrupt

// CHARACTER CLASS E ESPECIAIS

/* Podemos utilizar caracteres que não são alfanuméricos dentro da
classe. Mas fique atento, pois existem diversos casos especiais
para os mesmos. */

// Procura: - ou .

const regexp4 = /[-.]/g;

"111.222.333-44".replace(regexp4, "");
// 11122233344

// UM OU OUTRO

/* Combine caracteres literais com uma classe para buscarmos
variações: Ju[nl]ho busca Julho ou Junho. */

// Procura: B, seguido de r, a
// seguido de s ou z, seguido de i, l
const regexp5 = /Bra[sz]il/g;

"Brasil é com z: Brazil".replace(regexp5, "Prazer");
// Prazer é com z: Prazer

// DE A À Z

/* O traço - dentro [] pode servir para definirmos um alcance.
[A-Z] irá buscar os caracteres de A à Z. [0-9] busca de 0 à 9. A
tabela UNICODE é utilizada como referência para definir os 
caracteres dentro do alcance. */

const texto1 = "JavaScript é a linguagem";

// Busca por itens de a à z
const regexp6 = /[a-z]/g;

texto1.replace(regexp6, "0");
// J000S00000 é 0 000000000.

// Busca por itens de a à z e A à Z
const regexp7 = /[a-zA-Z]/g;

texto1.replace(regexp7, "1");
// 1111111111 é 1 111111111.

// Busca por números de 0 à 9
const regexp8 = /[0-9]/g;

const numeros = "123.333.333-33";
numeros.replace(regexp8, "X");
// XXX.XXX.XXX-XX

/* https://unicode-table.com/en */

// NEGAR

/* Utilizando o acendo circunflexo podemos negar caracteres. Ou seja,
pegue tudo que não seja [^a] */

// Procura: tudo que não estiver entre a e z
const regexp9 = /[^a-z]/g;

"Brasil é com z: Brazil".replace(regexp9, " ");
// rasil   com z   razil

// PONTO

/* O ponto . irá selecionar qualquer caracter, menos quebras de
linha. */

// Procura: todos os caracteres menos quebra de linha
const regexp10 = /./g;

texto1.replace(regexp10, "0"); // JavaScript é a linguagem
// 000000000000000000000000

// ESCAPAR ESPECIAIS

/* Caracteres especiais como o ponto ., podem ser escapados
utilizando a \, assim este não terá mais a sua função
especial e será tratado como literal. Liste de caracteres especiais:
+*?^$\.[]{}()|/ */

// Procura todos os pontos
const regexp11 = /\./g;
const regexp11Alt = /[.]/g;

"999.222.222.11".replace(regexp11, "-");
// 999-222-222-11

// WORD

/* O \w irá selecionar qualquer caracter alfanumérico e o underline.
É a mesma coisa que [A-Za-z0-9_]. */

// Procura: todos os alfanuméricos
const regexp12 = /\w/g;

"Guarda-chuva R$ 23,00.".replace(regexp12, "-");
// ------------ -$ --,--.

// NOT WORD

/* O \W irá selecionar tudo o que não for caracter alfanumérico e o
underline. É a mesma coisa que [^A-Za-z0-9_]. */

// Procura: o que não for caracter alfanuméricos
const regexp13 = /\W/g;
"Guarda-chuva R$ 23,00.".replace(regexp13, "-");
// Guarda-chuva-R--23-00-

// DIGIT

/* O \d irá selecionar qualquer dígito. É a mesma coisa que [0-9]. */

// Procura: todos os dígitos
const regexp14 = /\d/g;
"+55 (21) 2222-2222".replace(regexp14, "X");
// +XX (XX) XXXX-XXXX

// NOT DIGIT

/* O \D irá selecionar tudo que não for dígito. É a mesma coisa que [^0-9]. */

// Procura: todos os dígitos
const regexp15 = /\D/g;
"+55 (21) 2222-2222".replace(regexp15, "");
// 552122222222

// WHITESPACE

/* O \s irá selecionar qualquer espaço em branco, isso inclui
espaços, tabs, quebras de linhas. */

// Procura: espaços em branco
const regexp16 = /\s/g;
"+55 (21) 2222-  2222".replace(regexp16, "");
// +55(21)2222-2222

// NOT WHITESPACE

/* O \S irá selecionar qualquer caracter que não for espaço em
branco. */

// Procura: o que não for espaço em branco
const regexp17 = /\S/g;
"+55 (21) 2222-  2222".replace(regexp17, "X");
// XXX XXXX XXXXX  XXXX

// /[\s\S]\g irá selecionar tudo.

// QUANTIFICADOR

/* É possível selecionar caracteres seguidos, como /bbb/g irá
selecionar apenas bbb, Com as chaves podemos indicar a 
repetição /b{3}/g. Agora ele está fazendo uma seleção completa
e não caracter por caracter.*/

// Procure: 4 a's seguidos
const regexp18 = /aaaa/g;
const regexp18alt = /a{4}/g;

"Vaaaai ali por favor".replace(regexp18, "a");
// Vai ali por favor.

// QUANTIFICADOR MIN E MAX

/* Podemos informar o min e max do quantificador /a{a,4}/ vai
selecionar quando aparecer a duas vezes ou até 4 vezes.
/a{2,}/ irá selecionar quando se repetir duas ou mais vezes. */

// Procura: dígitos seguidos de 2 à 3
const regexp19 = /\d{2,3}/g;
"222.333.222.42".replace(regexp19, "X");
// X.X.X.X

// Procura: letras seguidos com 1 caracter ou mais
const regexp20 = /\w{1,}/g;
"A melhor linguagem é JavaScript".replace(regexp20, "X");
// X X X é X

// MAIS +

/* O sinal de + significa que devemos selecionar quando existir pelo
menos uma ou mais ocorrências. */

// Procura: dígitos em ocorrência de um ou mais
const regexp21 = /\d+/g;

"222.333.222.42".replace(regexp21, "X");
// X.X.X.X

// Procura: Começa com d, seguido por uma ou mais letras.
const regexp21letras = /d\w+/g;

"Dígitos, dados, desenhos, Dito, d".replace(regexp21letras, "X");
// Dígitos, X, X, Dito, d

// ASTERISCO *

/* O sinal * significa que devemos selecioanr quando existir 0 ou
mais ocorrências. */

// Procura: Começa com d, seguido por zero ou mais letras.
const regexp22 = /d\w*/g;
"Dígitos, dados, desenhos, Dito, d".replace(regexp22, "X");
// Dígitos, X, X, Dito, X

// OPCIONAL ?

/* O sinal ? significa que o caracter é opcional, pode ou não existir. */

// Procura: por regex com p opcional
const regexp23 = /regexp?/g;

"Qual é o certo, regexp ou regex?".replace(regexp23, "Regular Expression");
// Qual é o certo, Regular Expression ou Regular Expression?

// ALTERNADO |

/* O sinal | irá selecionar um ou outro. java|php */

// Procura: java ou php (case insensitive)
const regexp24 = /java|php/gi;

"PHP e Java são linguagens diferentes".replace(regexp24, "X");
// X e X são linguagens diferentes

// WORD BOUNDARY \B

/* O sinal \b irá indicar que pretendemos fazer uma seleção que
deve ter início e fim de não caracteres \w. */

const wordb = "Java não é JavaScript";

// Procura: java (case insensitive)
const regexp25 = /java/gi;
console.log(wordb.replace(regexp25, "X"));
// X não é XScript

// Procura: java (case insensitive)
const regexp26 = /\bjava\b/gi;
console.log(wordb.replace(regexp26, "X"));
// X não é JavaScript

// Procura: java (case insensitive)
const regexp27 = /\b\d+\b/gi;
console.log("O Restaurante25 na Rua 3, custa R$ 32, 00".replace(regexp27, "X"));
// O Restaurante25 na Rua X, custa R$ X, X

// NOT WORD BOUNDARY

/* É o contrário do \b */
const regexp28 = /\B\d+\B/gi;
console.log("11_22 33-44 55é66 77e88".replace(regexp28, "X"));
// 1X_X2 33-44 55é66 7XeX8

// ANCHOR BEGINNING

/* Com o ^ é possível informar que a busca deve ser iniciada no
início da linha. */

// Procura: sequência de alfanuméricos
// no início da linha.
const regexp29 = /^\w+/g;

console.log(
  `andre@origamid.com
contato@origamid.com`.replace(regexp29, "X")
);
// X@origamid.com
// contato@origamid.com

// ANCHOR END

/* Com o $ é possível informar que a busca deve ser iniciada no final
da linha. */

// Procura: sequência de alfanuméricos
// no final da linha.
const regexp30 = /\w+$/g;

console.log(
  `andre@origamid.com
contato@origamid.com`.replace(regexp30, "X")
);
// andre@origamid.com
// contato@origamid.X

// FLAG: M

/* Com a flag m de multiline, podemos informar que a busca de início
^ e final $ de linha devem ocorre em todas as linhas disponíveis. */

// Procura: sequência de alfanuméricos
// no final da linha.
const regexp31 = /\w+$/gm;

console.log(
  `andre@origamid.com
contato@origamid.com`.replace(regexp31, "X")
);
// andre@origamid.X
// contato@origamid.X

// Procura: sequência de alfanuméricos
// no início da linha.
const regexp32 = /^\w+/gm;

console.log(
  `andre@origamid.com
contato@origamid.com`.replace(regexp32, "X")
);
// X@origamid.com
// X@origamid.com

// LINE FEED \N

/* O \n irá selecionar o final de uma linha, quando criamos uma
nova. */

const regexp33 = /\n/g;

console.log(
  `andre@origamid.com\ncontato@origamid.com`.replace(regexp33, "---")
);
// andre@origamid.com---contato@origamid.com

console.log(
  `andre@origamid.com
contato@origamid.com`.replace(regexp33, "---")
);
// andre@origamid.com---contato@origamid.com

// UNICODE \U

/* O \u irá selecionar o respectivo caracter unicode, de acordo com
o código passado em \uXXXX. Ex: \u0040 seleciona o @. */

// Procure: @ ou ©
const regexp34 = /\u0040|\u00A9/g;

console.log("andre@origamid.com ©".replace(regexp34, "---"));
// andre---origamid.com ---
