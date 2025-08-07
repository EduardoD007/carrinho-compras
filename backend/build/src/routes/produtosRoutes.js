"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const ProdutoController_1 = __importDefault(require("../controllers/ProdutoController"));
const app = (0, express_1.Router)();
const produtoController = new ProdutoController_1.default();
app.get('/produtos', (req, res) => { produtoController.buscaProdutos(req, res); });
exports.default = app;
