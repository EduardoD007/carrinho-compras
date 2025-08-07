"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
class ProdutoController {
    constructor() {
        this.model = './src/database/data.json';
    }
    async buscaProdutos(req, res) {
        const produtos = await JSON.parse(fs_1.default.readFileSync(this.model, 'utf-8'));
        console.log(produtos);
        return res.status(200).json(produtos);
    }
}
exports.default = ProdutoController;
