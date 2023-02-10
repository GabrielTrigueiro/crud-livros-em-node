import express from "express";
import AutorController from "../controllers/autoresController.js";

const router = express.Router();

router
    .get("/autores", AutorController.listarAutorPorId)
    .get("/autores/:id", AutorController.listarAutorPorId)
    .delete("/autores/:id", AutorController.deletarAutorPorId)
    .post("/autores", AutorController.cadastrarAutor)
    .put("/autores/:id", AutorController.atualizarAutor)

export default router
