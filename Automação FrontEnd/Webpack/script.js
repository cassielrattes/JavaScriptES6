// WEBPACK

/* Bundler */
/* Agrupa / processa diversos arquivos e otimiza os mesmos. */

/* Altamente configurável */
/* Por isso é complexo */

// https://webpack.js.org/

// WEBPACK

/* $ npm install --save-dev webpack webpack-cli */
/* Instala o webpack e a cli do mesmo. Ter o package.json antes. */

/* $ npx webpack ./js/script.js -o ./main.js */
/* Irá agrupar todo o código, otimizar e mais. Utilizar npx é a mesma coisa que
utilizar node_modules/.bin/webpack. Facilita para utilizarmos cli's
instaladas localmente ao invés de globalmente. */

// NPM SCRIPTS

/* Permite definirmos uma linha de comando inteira, que será ativada
com npm run nomeScript. Não precisamos utilizar o npx aqui. */

// SCRIPTS EXTERNOS

/* Podemos facilmente importar scripts externos instalando os
mesmos através do NPM e utilizando o Webpack para fazer o
bundler finall */

/* 
    $ npm install jquery
    $ npm install lodash

    import $ from 'jquery';
    import _ from 'lodash';

    $("nav").hide();

    _.difference(['Banana','Morango', 'Uva'], ['Banana', 'Morango, 'Uva']);
    // Uva
*/
