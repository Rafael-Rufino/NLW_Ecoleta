<h3 align="center">
    <img alt="Logo" title="#logo" width="300px" src="./.github/logo.svg">
    <br><br>
    <b>Plataforma Desenvolvida para auxiliar professores e alunos!</b>  
    <br>
</h3>



# Índice

- [Sobre](#sobre)
- [Documentação](#documentacao)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Como Usar](#como-usar)
- [Como Contribuir](#como-contribuir)

<a id="sobre"></a>


## :bookmark: Sobre

	
O <strong>Ecoleta</strong> é uma aplicação Web e Mobile para ajudar pessoas a encontrarem pontos de coleta para reciclagem.

Essa aplicação foi construída na trilha <strong>Booster</strong> da <strong>Next Level Week</strong> distribuída pela [Rocketseat](https://rocketseat.com.br/). A ideia de criar uma aplicação voltada ao meio ambiente surgiu da coincidência da data do curso e a data da <strong>semana do meio ambiente</strong

<a id="documentacao"></a>

## :books: Documentação


Para reforçar alguns conceitos e registrar comandos que são dificeis de se lembrar eu fiz uma pequena **[DOCUMENTAÇÃO](DOCUMENTATION.md)** para ajudar quem esta iniciando com  **Node** e  **Sqlite**.


<a id="tecnologias-utilizadas"></a>

## :rocket: Tecnologias Utilizadas

O projeto foi desenvolvido utilizando as seguintes tecnologias

- [Html](https://developer.mozilla.org/pt-BR/docs/Aprender/HTML/Introducao_ao_HTML)
- [JavaScript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)
- [Node.js](https://nodejs.org/en/)
- [Sqlite](https://sqlite.org/docs.html)



## :heavy_check_mark: :computer: Resultado Web

<h1 align="center">
    <img alt="Web Home" src="./.github/index.png" width="600px">
    <img alt="Pessoa cadastrada" src="./.github/pessoa.png" width="600px">

</h1>

<a id="como-usar"></a>

## :fire: Como usar

- ### **Pré-requisitos**

  - É **necessário** possuir o **[Node.js](https://nodejs.org/en/)** instalado na máquina
  - Também, é **preciso** ter um gerenciador de pacotes seja o **[NPM](https://www.npmjs.com/)** ou **[Yarn](https://yarnpkg.com/)**.
  - Por fim, é **essencial** ter o **[Expo](https://expo.io/)** 
  instalado de forma global na máquina.

  

1. Faça um clone :

```sh
  $ git clone https://github.com/Rafael-Rufino/NLW_Ecoleta.git

```

2. Executando a Aplicação:

```sh
  # Instale as dependências
  $ npm install 

  ## Crie o banco de dados
  $ cd server
  $ npm run knex:migrate
  $ npm run knex:seed


  # Inicie a aplicação web
  $ cd NLW_Ecoleta/src
  $ npm start


  
  # Acessar o Servidor no Navegador
  $ http://127.0.0.1:5500/
 
  # Porta de Acesso Liberado
  $ 5500



```


## :recycle: Como contribuir

- Faça um Fork desse repositório,
- Crie uma branch com a sua feature: `git checkout -b my-feature`
- Commit suas mudanças: `git commit -m 'feat: My new feature'`
- Push a sua branch: `git push origin my-feature`


🎓 **Quem ministrou?**

As aulas foram ministradas pelo mestre Mayk Brito - Instructor - Rocketseat nas aulas da Next Level Week.

📝 **License**

Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE.md) para mais detalhes.




<h4 align="center">
    Feito com 💜 by <a href="https://www.linkedin.com/in/rafael-r-dos-santos-b889311ba/" target="_blank">Rafael Rufino</a>
</h4>



