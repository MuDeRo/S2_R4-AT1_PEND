import { Produto } from "../models/Produto.js";
import produtoRepository from "../repositories/produtoRepository.js";

const produtoController = {

    criar: async (req, res) => {
        try {
            const nome = String(req.body.nome);

            const idCategoria = Number(req.body.idCategoria); // converte o id da categoria recebido na requisição para número
            const valor = Number(req.body.valor); // converte o preço recebido na requisição para número
            const caminhoImage = `/uploads/image/${req.file.filename}`;

            console.log({ idCategoria, nome, valor, caminhoImage });

            const produto = Produto.criar({ idCategoria, nome, valor, caminhoImage }); // utiliza o método estático criar da classe Produto para criar um objeto da classe Produto a partir dos dados recebidos na requisição

            
            

            const resultado = await produtoRepository.criar(produto);
            res.status(201).json(resultado);

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