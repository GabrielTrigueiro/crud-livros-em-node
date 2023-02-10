import autores from "../models/Autor.js"

class AutorController {

    static listarAutores = (req, res) => {
        autores.find((err, autores) => {
            res.status(200).json(autores)
        })
    }

    static cadastrarAutor = (req, res) => {
        let autor = new autores(req.body)
        autor.save((err) => {
            if(err) {
                res.status(500).send({message: `${err.message} - falha no cadastro`})
            }
            else{
                res.status(201).send(autor.toJSON())
            }
        })
    }

    static atualizarAutor = (req, res) => {
        const id = req.params.id
        autores.findByIdAndUpdate(id, {$set: req.body}, (err) => {
            if(!err) {
                res.status(200).send({message: "O livro foi atualizado com sucesso"})
            }
            else{
                res.status(500).send({message: `${err.message} - falha na atualização do livro`})
            }
        })
    }

    static listarAutorPorId = (req, res) => {
        const id = req.params.id
        autores.findById(id, (err, autores) => {
            if(!err) {
                res.status(200).send(autores)
            }
            else{
                res.status(400).send({message: `${err.message} - Autor não encontrado`})
            }
        })
    }

    static deletarAutorPorId = (req, res) => {
        const id = req.params.id
        autores.findByIdAndDelete(id,(err) => {
            if(!err) {
                res.status(200).send({message: "Autor removido com sucesso"})
            }
            else{
                res.status(400).send({message: `${err.message} - Autor não encontrado`})
            }
        })
    }
}

export default AutorController
