import express from 'express';
import produtos from './produtosRoutes'

const app = express();

app.use(
  express.json(),
  produtos
)

export default app;