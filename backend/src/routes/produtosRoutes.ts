import { Router } from 'express';
import ProdutoController from '../controllers/ProdutoController';

const app = Router();
const produtoController = new ProdutoController();

app.get('/produtos', (req, res) => {produtoController.buscaProdutos(req,res)})

export default app;