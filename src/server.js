const express = require("express")
const server = express()

//pegar o banco de dados 
const db = require("./database/db")



// configurar a pasta publica 
server.use(express.static("public"))

// habilitar o uso do req.body na nossa aplicação
server.use(express.urlencoded({extended:true}))



//utilizar templates 
const nunjucks = require("nunjucks")
nunjucks.configure("src/views", {
    express: server,
    noCache: true

})


//configurar caminhos da minha aplicação
// página inicial
// req: Requisição
// res: Resposta

server.get("/", (req, res) => {
    return res.render("index.html", {title: "Um titulo"})

})

server.get("/create-point", (req, res) => {

    // rer.query: Query String da noss Url
    // console.log(req.query)
// mexi
    return res.render("create-point.html")

})


server.post("/savepoint", (req, res) => {

    // req.body: corpo do nosso formulario
    // console.log(req.city)

    // Inserir dados no banco de dados
    
    const query =`
        INSERT INTO places(
            image,
            name,
            address,
            address2,
            state,
            city,
            items
        ) VALUES (?,?,?,?,?,?,?);
    `

    const values = [
        req.body.image,
        req.body.name,
        req.body.address,
        req.body.address2,
        req.body.state,
        req.body.city,
        req.body.items
    
    ]

    function afterInsertDate(err){
        if(err){
            console.log(err)
            return res.send("Erro no cadastro!")
        }

        
        console.log("Cadastrado com sucesso")
        console.log(this)

        return res.render("create-point.html", {saved: true})
        
    }
    db.run(query, values, afterInsertDate)

})


server.get("/search-results", (req, res) => {

    const search = req.query.search

    if (search ==  ""){
        //pesquise vazia
        return res.render("search-results.html", {total: 0})
    }



    // pegar dados do banco de dados
    // realizar pesquisa no banco de dados por estado (state)
    db.all(`SELECT * FROM places WHERE state LIKE '%${search}%'`, function(err, rows){
                if(err){
                    return console.log(err)
                }
                const total = rows.length 
                // console.log("Aqui estão seus registros: ")
            //   console.log(rows)  
                // mostrar a pagina html com os dados do banco de daods
                return res.render("search-results.html", {places: rows, total: total})
        
            })

})

// ligar o servidor
server.listen(3000)