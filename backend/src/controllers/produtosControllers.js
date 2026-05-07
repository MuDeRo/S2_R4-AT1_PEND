import { Produto } from "../models/Produtos.js";
import produtoRepository from "../repositories/produtoRepository.js";

const produtoController = {

    criar: async (req, res) => {
        try {
            const { idCategoria, nomeProduto, valor } = req.body;

            const vinculoImagem = req.file ? req.file.path : "";
            console.log(vinculoImagem)
            const produto = new Produto(
                Number(idCategoria),
                nomeProduto,
                Number(valor),
                vinculoImagem
            );

            const result = await produtoRepository.criar(produto);
            res.status(201).json({ result });

        } catch (error) {

            console.log(error);
            res.status(500).json({
                message: "Erro ao criar produto",
                errorMessage: error.message
            });
        }
    },

    atualizar: async (req, res) => {
        try {
            const id = Number(req.params.id);
            const { nomeProduto, valor, idCategoria } = req.body;

            if (isNaN(id) || !nomeProduto) {
                return res.status(400).json({
                    message: 'Dados inválidos'
                });
            }

            const vinculoImagem = req.file ? req.file.path : undefined;

            const produto = Produto.editar({
                idCategoria: Number(idCategoria),
                nomeProduto,
                valor: Number(valor),
                vinculoImagem
            }, id);

            const result = await produtoRepository.atualizar(produto);

            res.status(200).json({ result });

        } catch (error) {
            console.log(error);
            res.status(500).json({
                message: 'Ocorreu um erro no servidor',
                errorMessage: error.message
            });
        }
    },

    selecionar: async (req, res) => {
        try {
            const result = await produtoRepository.selecionar();

            res.status(200).json(result);

        } catch (error) {
            console.log(error);

            res.status(500).json({
                message: "Erro no servidor",
                errorMessage: error.message
            });
        }
    },

    deletar: async (req, res) => {
        try {
            const id = Number(req.params.id);

            const result = await produtoRepository.deletar(id);

            res.status(200).json({ result });

        } catch (error) {
            console.log(error);
            res.status(500).json({
                message: 'Ocorreu um erro no servidor',
                errorMessage: error.message
            });
        }
    }
};

export default produtoController;