//importa os módulos http e express
const http = require('http');
const express = require('express');
//constrói um objeto express
const app = express();
//importa o body-parser
const bodyParser = require('body-parser');
app.use(bodyParser.json());
//configura a porta do servidor e o coloca em execução.
const porta = 3000;
app.set('port', porta);
const server = http.createServer(app);
server.listen(3000);

let livros = [
    {
        id: 1,
        titulo: "Iracema",
        descricao: 'ABC',
        edicao: '1',
        autor: 'Jose de Alencar'
    },
    {
        id: 1,
        titulo: "Dom Casmurro",
        descricao: 'ABC',
        edicao: '1',
        autor: 'Machado de Assis'
    },
    {
        id: 1,
        titulo: "Metamorfose",
        descricao: 'ABC',
        edicao: '1',
        autor: 'Kafka'
    },
];

app.get('/livros', (req, res, next) => {
    res.status(201).json(livros);
})

app.post('/livros', (req, res, next) => {
    const livro = {
        id: id += 1,
        titulo = req.body.titulo,
        descricao = req.body.descricao,
        edicao = req.body.edicao,
        autor = req.body.autor
    }
    livros.push(livro);
    res.status(201).json(livros);
})

app.put("/livros", (req, res, next) => {
    livros.forEach((livro) => {
        if(livro.id === req.body.id){
            livro.titulo = req.body.titulo,
            livro.descricao = req.body.descricao,
            livro.edicao = req.body.edicao,
            livro.autor = req.body.autor
        }
    })
    res.status(200).json(livros);
})

app.delete('/livros/:id', (req, res, next) => {
    const idLivroDeletado = req.params.id;
    livros.forEach((livro, index) => {
        if(livro.id == idLivroDeletado){
            livros.splice(index, 1);
        }
    })
    res.status(201).json(livros)
})