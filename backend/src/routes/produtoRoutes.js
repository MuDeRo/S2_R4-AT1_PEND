import { Router } from "express";
import produtoController from "../controllers/produtosControllers.js";

const produtoRoutes = Router();

produtoRoutes.get('/', produtoController.selecionar);
produtoRoutes.post('/', produtoController.criar);
produtoRoutes.put('/:id', produtoController.atualizar);
produtoRoutes.delete('/:id', produtoController.deletar);

export default produtoRoutes;