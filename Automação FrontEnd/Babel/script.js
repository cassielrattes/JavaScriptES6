// BABEL

/* Compilador */
/* Transforma código novo em código antigo. Ex: const nome = 'Andre';
vira var nome = 'Andre'; */

/* Browser Suporte */
/* Para que um browser possa suportar algo novo de JavaScript é preciso que
ele esteja atualizado, mas nem todo usuário possuio a última versão do
browser instalada. */

/* Can I User */
/* O site https://caniuse.com/ mostra em quais browsers a novidade está
disponível ou não. */

// POLYFILL VS TRANSPILER

/* Polyfill */
/* Cria métodos / funções com o mesmo nome das atuais, porém utilizando
código antigo para permitir o uso em browsers que não possuem a API. */

/* Transpiler */
/* Transforma código novo em código antigo. Ou seja, transforma const em
var. */

// INSTALAR BABEL

// https://babeljs.io/docs/en/usage

/* 
    $ npm install --save-dev \
    @babel/core @babel/preset-env \
    @babel/plugin-transform-runtime \
    babel-loader 
*/

// Instala o Babel, as configurações padrões e o loader para o Webpack
