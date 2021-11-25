// CLASSES E ATRIBUTOS

/* CLASSLIST */

/* Retorna uma lista com as classes do elemento. Permite adicionar,
remover e verificar se contém.  */

const menu = document.querySelector(".menu");

menu.className; // string
menu.classList; // lista de classes
menu.classList.add("ativo"); // adiciona uma classe
menu.classList.add("ativo", "mobile"); // adiciona duas ou mais classes
menu.classList.remove("ativo"); // remove uma classe
menu.classList.toggle("ativo"); // adiciona/remove uma classe
menu.classList.contains("ativo"); // true ou false
menu.classList.replace("ativo", "inativo"); // altera uma classe

/* ATTRIBUTES */

/* Retorna uma array-like com os atributos do elemento */

const animais = document.querySelector(".animais");

animais.attributes; // retorna todos os atributos
animais.attributes[0]; // retorna o primeiro atributo

/* GETATTRIBUTES E SETATTRIBUTES */

/* Métodos que retornam ou definem de acordo com o atributo
selecionado */

const img = document.querySelector("img");

img.getAttribute("src"); // valor do src
img.setAttribute("alt", "Texto alternativo"); // muda o alt
img.hasAttribute("id"); // true / false
img.removeAttribute("alt"); // remove o alt

img.hasAttribute(); // true / false se tem algum atributo

/* É muito comum métodos de get e
set. */

/* READ ONLY VS WRITABLE */

/* Existem propriedades que não permitem a mundança de seus
valores, essas são consideradas Read Only, ou seja, apenas leitura. */

const animais = document.querySelector(".animais");

animais.className; // string com o nome das classes
animais.className = "azul"; // substitui completamente a string
animais.className += " vermelho"; // adiciona vermelho à string

animais.attributes = 'class="ativo"'; // não funciona, read-only

/* Lembre-se que podemos modificar
o valor de uma propriedade
objeto.propriedade = "" */
