import express from "express"

const app = express()

//transforma tudo que recebe em JSON
app.use(express.json())

const livros = [
    {id: 1, "titulo": "senhor dos aneis"},
    {id: 2, "titulo": "o hobbit"},
]

app.get('/', (req, res) => {
    res.status(200).send('curso de node')
})

app.get('/livros', (req, res) => {
    res.status(200).json(livros)
})

app.post('/livros', (req, res) => {
    livros.push(req.body)
    res.status(201).json('livro cadastrado com sucesso')
})

app.put('/livros/:id', (req, res) => {
    let index = buscaLivro(req.params.id)
    livros[index].titulo = req.body.titulo
    res.status(200).json(livros)
})

function buscaLivro(id){
    return livros.findIndex(item => item.id == id)
}

export default app