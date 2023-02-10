import express from "express";
import AutorController from "../controllers/autoresController.js";

const router = express.Router();

router
.get("/autores/:id", AutorController.listarAutorPorId)
.put("/autores/:id", AutorController.atualizarAutor)
.delete("/autores/:id", AutorController.deletarAutorPorId)
.get("/autores", AutorController.listarAutores)
.post("/autores", AutorController.cadastrarAutor)

export default router
