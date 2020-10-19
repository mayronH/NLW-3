// Importar o express instalado pelo npm
const express = require('express');
const path = require('path');
const pages = require('./pages.js');
// Inicia o express
const server = express();
server
    // para utilizar o body da request
    .use(express.urlencoded({ extended: true }))
    // Configurando os arquivos estáticos
    .use(express.static('public'))
    // Configurando a template engine
    .set('views', path.join(__dirname, 'views'))
    .set('view engine', 'hbs')
    // Cria uma rota
    // .get('/', (request, response) => {
    //     // retorna uma responta para a requisição, uma mensagem, arquivo e etc
    //     // return response.send("Hello World!")
    //     // Carrega a index.html
    //     // return response.sendFile(path.join(__dirname, 'views', 'index.html'))
    //     return response.render('index')
    // })
    .get('/', pages.index)
    .get('/orphanage', pages.orphanage)
    .get('/orphanages', pages.orphanages)
    .get('/create-orphanage', pages.createOrphanage)
    .post('/save-orphanage', pages.saveOrphanage)
// Inicia o servidor na porta 5500
server.listen(5500)