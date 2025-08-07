import fs from 'fs';
import TypeProduto from '../Types/TypeProduto';
import { Request, Response } from 'express'



class ProdutoController {
  private model:string

  constructor() {
   this.model = './src/database/data.json'
  }

  async  buscaProdutos(req: Request, res: Response) {
    const produtos: TypeProduto[] = await JSON.parse(fs.readFileSync(this.model, 'utf-8'))
    return res.status(200).json(produtos);
  }
}

export default ProdutoController;