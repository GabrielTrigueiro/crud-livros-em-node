const http = require("http")
const port = 8888
const rotas = {
    '/': 'Curso de Node',
    '/livros': 'Página de livros',
    '/autores': 'Página de autores',
    '/sobre': 'Página de informações'
}
const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type:' : 'text/plain'})
    res.end(rotas[req.url])
})
server.listen(port, () => {
    console.log(`Servidor rodando na porta http://localhost/${port}`)
})