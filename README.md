# SWEng2019-1

Projeto da turma de Fundamentos de Engenharia de Software FTEC 2019/1

## INSTALAÇÕES NECESSÁRIA PARA O PROJETO

-   [GIT](https://git-scm.com/downloads)
-   [NodeJS](https://nodejs.org/en/download/)
-   [Xampp](https://www.apachefriends.org/download.html)

## MODO DE USAR O TERMINAL

-   Na pasta do projeto clicar com o direito do mouse e clicar em "Git Bash Here"

## FRONTEND

Executar apenas a primeira vez no terminal:

-   npm i -g npm (atualiza NPM)
-   npm i -g node-sass (atualiza node-sass globalmente)
-   npm i (instala pacotes de tarefas)
-   npm audit fix (corrigi problemas em pacotes)

## React

-   [Referencia da estrutura](https://medium.freecodecamp.org/a-complete-react-boilerplate-tutorial-from-zero-to-hero-20023e086c4a)

### Necessário para funcionar o projeto

-

#### Ambiente de desenvolvimento, executar no terminal:

-

#### Ambiente de produção, executar no terminal:

-

### Referências de CSS auxiliar

-   [Bootstrap Display](https://getbootstrap.com/docs/4.3/utilities/display/)
-   [Bootstrap Grid](https://getbootstrap.com/docs/4.3/layout/grid/)
-   [Bootstrap Spacing](https://getbootstrap.com/docs/4.3/utilities/spacing/)
-   [Bootstrap Text](https://getbootstrap.com/docs/4.3/utilities/text/)

### Imagens

-   Rodar o 'gulp image' para otimizar as imagens de pasta resources e colocar na pasta public;
-   Seguir a nomenclatura spinal-case - Ex: image-name;

### Javascript

-   Ao utilizar métodos do ES6 sempre verificar se tem suporte para IE9+, de preferência para métodos do ES5;
-   Priorizar os seletores nativos como "document.getElementById" ou "document.querySelector";
-   Javascript modular;
-   Strings utilizar apóstrofo - Ex: 'texto';
-   Utilizar [JSDOC](https://msdn.microsoft.com/pt-br/library/Mt162307.aspx);

### Links externos com target="\_blank" em tags <a/>

-   Utilizar rel="noopener" [Link](https://desenvolvimentoparaweb.com/miscelanea/relnoopener-performance-seguranca/);

### Plugins

-   HttpRequest: [Axios](https://github.com/axios/axios);
-   Template Engine: [Mustache](https://github.com/janl/mustache.js/);

### SASS

-   Utilizar as variáveis sempre que possível;
-   Media queries dentro do próprio elemento seguindo os padrões especificados no projeto;
-   [Metodologia tipo modular](https://medium.com/@marcmintel/how-to-use-the-module-pattern-in-your-scss-sass-stylesheets-89fe38a6e1f3);

### SVG

-   Rodar o 'gulp image-svg' para otimizar os svgs de pasta resources e colocar na pasta public;
-   Nomes dos arquivos devem começar com "svg" e seguir nomenclatura spinal-case - Ex: svg-nome-arquivo;
-   Usar os svgs de maneira inline com o file_get_contents - Ex: <?= file_get_contents(asset('assets/img/svg/svg-arrow-lg-right.svg')); ?>

### Principais Dependências

-   [@babel/cli](https://babeljs.io/docs/en/babel-cli)
-   [@babel/core](https://www.npmjs.com/package/@babel/core)
-   [@babel/polyfill](https://babeljs.io/docs/en/babel-polyfill)
-   [@babel/preset-env](https://babeljs.io/docs/en/babel-preset-env)
-   [@babel/plugin-transform-modules-amd](https://www.npmjs.com/package/@babel/plugin-transform-modules-amd)
-   [bootstrap](https://getbootstrap.com/)
-   [browser-sync](https://browsersync.io/docs/gulp)
-   [gulp](https://www.npmjs.com/package/gulp)
-   [gulp-autoprefixer](https://www.npmjs.com/package/gulp-autoprefixer)
-   [gulp-babel](https://www.npmjs.com/package/gulp-babel)
-   [gulp-clean](https://www.npmjs.com/package/gulp-clean)
-   [gulp-eslint](https://www.npmjs.com/package/gulp-eslint)
-   [gulp-if](https://www.npmjs.com/package/gulp-if)
-   [gulp-imagemin](https://www.npmjs.com/package/gulp-imagemin)
-   [gulp-plumber](https://www.npmjs.com/package/gulp-plumber)
-   [gulp-sass](https://www.npmjs.com/package/gulp-sass)
-   [gulp-sass-lint](https://www.npmjs.com/package/gulp-sass)
-   [gulp-uglify](https://www.npmjs.com/package/gulp-uglify)
-   [internal-ip](https://www.npmjs.com/package/internal-ip)

### Principais Metodologias

-   [ES6](http://es6-features.org/)
-   [RequireJS](https://requirejs.org/)
