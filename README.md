# React: Projeto PetShop

Projeto iniciado através do [Create React App](https://github.com/facebook/create-react-app).

Obs: este projeto poderia ser criado também a partir do vite

## Execução do app

- Na primeira vez, é necessario `npm install` para gerar node_module (com dependencias etc).

- E para executar, sempre use `npm start` e acesse `localhost:3000`

## Sobre Módulos CSS

- O uso de módulos CSS garante escopo de estilos, ou seja, o CSS criado em módulos só é aplicado no componente em que o módulo foi importado.

- Arquivos de Módulo devem ser nomeados como `Componente.module.css`.

- A importação de módules CSS deve ser feita com `import nome from "caminho-do-module"`.

## Sobre Media Query

### Mobile First:

Telas a partir de X tamanho (min-width)

### Desktop First:

Telas de até o tamanho X (max-width)

---

## Uso de rotas com a lib react-router-dom (versão 5)

### Instalação

`npm install react-router-dom@5`

### App.jsx

1. Realizar a importação dos recursos da lib:
   `import { BrowserRouter, Route, Switch } from "react-router-dom";`

2. Envolver todo o conteúdo do App.jsx dentro do **BrowserRouter**

3. Cada componente que funciona como "página ou tela" deve estar dentro de um `<Route>`.

4. Os `<Route>` devem estar dentro de um `<Switch>` para que aconteça a troca entre componentes ao navegar.

**Obs.:** não coloque nada além de `<Route>` no `<Switch>`

#### Sintaxe alternativa para aplicar rotas:

`<Route exact path="/" component={Home}>`

`<Route path="/produtos" component={Produtos}>`

`<Route path="/sobre" component={Sobre}>`

`<Route path="/contato" component={Contato}>`

### Menu.jsx

1. Importar o NavLink:
   `import { NavLink } from "react-router-dom";`

2. Substituir a tag `<a>` pelo `<NavLink>` e o atributo `href` por `to`

### Criação de um componente de interface chamado Caixa

- Em vez de usar uma `div` en cada página agrupando conteúdos diferentes, isolamos ela num componente genérico(Caixa), aplicamo o CSS uma única vez usando módulo do componente, e programamos através de `props` o carregamento dinâmico do conteúdo (**children**) e de classes adicionais (**listaDeClasses**).
- DICA: você pode usar **destructuring** de objetos nas `props`

## Usando uma Api fake para simular processos de consumo de dados dinâmicos

### Instalação global ddo pacote JSON-SERVER

`npm install -g json-server`

Obs: se tiver problemas ao executar, utilize o **Node.js command prompt**

### Utilização de um arquivo.json para simular a base de dados da API

- É necessário criar um **arquivo.json** em qualquer pasta em sua máquina (no nosso caso, usamos a própria pasta raiz po PetShop). Este arquivo deve ao ser composto por um grande objeto contendo arrays com outros objetos.

## Execução do server da API

1. Usando de referência o **node.js command prompt**, acesse a pasta onde está o **nome-do-arquivo.json**
2. Execute o comando `json-server --watch db.json --port 3001`
   Obs: o número da porta deve ser diferente da 3000 (que é padrão no json-server) pois esta porta já estará sendo usada peçp app **React**
   Dica: no **package.json** do seu app adicione em `script` uma nnova propriedade chamada `api` valendo `json-server --watch db.json --port 3001`. Desta forma, você poderá executar o server da API digitando simplesmente `npm run api`
