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
![Arquitetura Expo](https://user-images.githubusercontent.com/57465943/83958311-8e7daf00-a846-11ea-80c1-894d4242f593.PNG)
![Diagrama API RESTful](https://user-images.githubusercontent.com/57465943/83958317-90e00900-a846-11ea-8c74-9177db5d8929.PNG)
![Diagrama comandos Node-Terminal](https://user-images.githubusercontent.com/57465943/83958318-93daf980-a846-11ea-8b52-a39cc9e59cb3.PNG)
![hello-word](https://user-images.githubusercontent.com/57465943/83958324-a1907f00-a846-11ea-8962-93d0e836bbdd.PNG)

## **2ª Aula**
Começamos a programar as rotas do backend, para exercer suas funções no banco SQLite:
![2-dia](https://user-images.githubusercontent.com/57465943/83958407-b15c9300-a847-11ea-977a-766e54305bed.PNG)
![backend](https://user-images.githubusercontent.com/57465943/83958408-b3beed00-a847-11ea-9df4-db9a4c7aabe2.PNG)

## **3ª Aula**
Começamos a programar o frontend, além de estudar alguns conceitos de React:
![3-dia](https://user-images.githubusercontent.com/57465943/83958450-3647ac80-a848-11ea-9f8c-cac66ce07398.PNG)
![home](https://user-images.githubusercontent.com/57465943/83958460-5f683d00-a848-11ea-99d5-af97dabbae86.PNG)

## **4ª Aula**
Na aula 4, foi dia de começar a entender na prática como funciona o back-end. Conhecemos o node.js e criamos nosso servidor;


## **5ª Aula**
E para finalizar o projeto, importamos a dependência do SQLite para nossa aplicação e fizemos toda a configuração do db (banco de dados).

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
