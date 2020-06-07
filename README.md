![icon_ecoleta](https://user-images.githubusercontent.com/62728109/83677850-2cf1e200-a5b3-11ea-8d04-f91369115c62.png)
</br>
<h1 align="center"> 🚀 Next Level Week </h1>
<p align="center" style="font-size: 13px">|| "Uma semana para acelerar sua evolução como dev e avançar para o PRÓXIMO NIVEL." ||</p>

O **Ecoleta** é um projeto (aplicação web) construído no **Starter**, parte da semana **Next Level Week** ![icon_nlw](https://user-images.githubusercontent.com/62728109/83677578-c076e300-a5b2-11ea-825c-bc31c88da1d2.png).

A aplicação basea-se em um marketplace de coleta de resíduos, onde pessoas físicas e/ou jurídicas poderão cadastrar e/ou encontrar pontos de coleta em qualquer lugar do Brasil.

🧠 Bibliotecas e tecnologias utilizadas:
- <a href="https://www.w3schools.com/html/default.asp" style="text-decoration: none; font-size: 16px; color: #fff;" >HTML5; </a>
- <a href="https://www.w3schools.com/w3css/" style="text-decoration: none; font-size: 16px; color: #fff;" > CSS; </a>
- <a href="https://www.w3schools.com/js/" style="text-decoration: none; fonti-size: 16px; color: #fff"> JavaScript </a>
- <a href="https://www.typescriptlang.org/" style="text-decoration: none; font-size: 16px; color: #fff;" >TypeScript; </a>
- <a href="https://nodejs.org/en/" style="text-decoration: none; font-size: 16px; color: #fff;" >NodeJS </a>
- <a href="https://pt-br.reactjs.org/" style="text-decoration: none; font-size: 16px; color: #fff;" >React</a>
- <a href="https://git-scm.com/" style="text-decoration: none; font-size: 16px; color: #fff;" >Git Bash; </a>
- <a href="http://knexjs.org/" style="text-decoration: none; font-size: 16px; color: #fff;" >Knex SQLite. </a>
- <a href="https://reactnative.dev/" style="text-decoration: none; font-size: 16px; color: #fff;" >React Native </a>
- <a href="https://expo.io/" style="text-decoration: none; font-size: 16px; color: #fff;" >Expo </a>

<hr>

Baseado nas API's de Localidade [Cidades IBGE](https://servicodados.ibge.gov.br/api/docs/localidades?versao=1#api-Municipios-estadosUFMunicipiosGet) e [Estados IBGE](https://servicodados.ibge.gov.br/api/v1/localidades/estados)

<p style="font-size: 15px">Layout do projeto no Figma: <a href="https://www.figma.com/file/9TlOcj6l7D05fZhU12xWT3/Ecoleta-Booster?node-id=0%3A1" style="text-decoration: none; color: #FFF">Ecoleta - Trilha booster do NLW</a></p>

## **1ª Aula**
Foi trabalhado os conceitos e ambiente de desenvolvimento:

![1-dia](https://user-images.githubusercontent.com/57465943/83958261-17481b00-a846-11ea-92a3-213a9fad3f3a.PNG)

## **2ª Aula**
Ainda trabalhando com HTML, CSS e inserindo JS, aprendemos a buscar cidades e estados (dados) em um database trazendo-os para a aplicação;
![aula2](https://user-images.githubusercontent.com/62728109/83678917-e43b2880-a5b4-11ea-84aa-b57b5bc7a2d7.png)

## **3ª Aula**
Continuou-se trabalhando os conceitos de HTML, CSS e JS de uma maneira mais aprofundada e encerrou-se a aula em 3 etapas concluidas;
![aula3](https://user-images.githubusercontent.com/62728109/83678626-6d9e2b00-a5b4-11ea-8ad4-03c955dcad5a.jpg)

## **4ª Aula**
Na aula 4, foi dia de começar a entender na prática como funciona o back-end. Conhecemos o node.js e criamos nosso servidor;
![aula4](https://user-images.githubusercontent.com/62728109/83796845-0a75cc80-a678-11ea-8137-0c0ac548ac99.jpg)

## **5ª Aula**
E para finalizar o projeto, importamos a dependência do SQLite para nossa aplicação e fizemos toda a configuração do db (banco de dados).
![aula5](https://user-images.githubusercontent.com/62728109/83922344-8ba39100-a756-11ea-9abd-2aa39816d895.png)

<hr>

<br>
<hr>
<h1 style="font-size: 24px">Passo a passo para executar:</h1>
<h2>Pré-requisitos:</h2>

- <p>Node JS</p>
- <p>Expo</p>
<hr>
<h2>💻 Back-end</h2>
<p>Entrando na pasta e instalando as dependências:</p>

```
> cd server
> npm install
```

<p>Banco de dados: ( SQlite com Knex )</p>

```
> npm run knex:migrate
```
```
> npm run knex:seed
```

<p>Iniciando o servidor:</p>

```
> npm run dev ou yarn dev
```
<hr>
<h2>👀 Front-end</h2>
<p>Entrando na pasta e instalando as dependências:</p>

```
> cd web
> npm install
```

<p>Iniciando o front-end</p>

```
> npm start ou yarn start
```
<hr>
<h2>📱 Mobile</h2>
<p>Entrando na pasta e instalando as dependências:</p>

```
> cd mobile
> npm install
```

<p>Iniciando o mobile</p>

```
npm start ou yarn start
```
<br>
<hr>

![quem_ministrou](https://user-images.githubusercontent.com/62728109/83679095-35e3b300-a5b5-11ea-940f-dc15b1e3e9bc.png)
 **Quem ministrou as aulas?**

As aulas foram ministradas pelo [Diego Fernandes](https://github.com/diego3g) da [Rocketseat](https://rocketseat.com.br/).

<hr>

<h4> Referências e agradecimentos </h4>

<a href="https://github.com/carlosantoss/nlw" style="text-decoration: none; color:#FFF">Carlos Santos</a>
<a href="https://github.com/ArmandoVinicius" style="text-decoration: none; color: #FFF">Armando Vinicius</a>
