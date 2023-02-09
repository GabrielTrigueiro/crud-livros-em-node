import express from "express"

const app = express()

//transforma tudo que recebe em JSON
app.use(express.json())

const livros = [
    {id: 1, "titulo": "senhor dos aneis"},
    {id: 2, "titulo": "o hobbit"},
]

//pagina inicical
app.get('/', (req, res) => {
    res.status(200).send('curso de node')
})

//get all livros
app.get('/livros', (req, res) => {
    res.status(200).json(livros)
})

//get by id
app.get('/livros/:id', (req, res) => {
    let index = buscaLivro(req.params.id)
    res.status(200).json(livros[index])
})

//create livro
app.post('/livros', (req, res) => {
    livros.push(req.body)
    res.status(201).json('livro cadastrado com sucesso')
})

//edit livro
app.put('/livros/:id', (req, res) => {
    let index = buscaLivro(req.params.id)
    livros[index].titulo = req.body.titulo
    res.status(200).json(livros)
})

//deletar livro
app.delete('/livros/:id', (req, res) => {
    let {id} = req.params
    let index = buscaLivro(id)
    livros.splice(index, 1)
    res.send(`Livro ${id} removido com sucesso`)
})

function buscaLivro(id){
    return livros.findIndex(item => item.id == id)
}

export default app