import { connection } from "../configs/Database.js";

const produtoRepository = {

    criar: async (produto) => {
        const sql = `INSERT INTO produtos (idCategoria, nomeProduto, valor, vinculoImagem) VALUES (?, ?, ?, ?)`;

        const valores = [
            produto.idCategoria,
            produto.nomeProduto,
            produto.valor,
            produto.vinculoImagem
        ];

        const [rows] = await connection.execute(sql, valores);
        return { id: rows.insertId };
    },

    atualizar: async (produto) => {
        const sql = `UPDATE produtos SET idCategoria = ?, nomeProduto = ?, valor = ?, vinculoImagem = ? WHERE id = ?`;

        const values = [
            produto.idCategoria,
            produto.nomeProduto,
            produto.valor,
            produto.vinculoImagem,
            produto.id
        ];

        const [rows] = await connection.execute(sql, values);

        if (rows.affectedRows === 0) {
            throw new Error('Produto não encontrado');
        }

        return rows;
    },

    selecionar: async () => {
        const sql = "SELECT * FROM produtos";
        const [rows] = await connection.execute(sql);
        return rows;
    },

    deletar: async (id) => {
        const sql = 'DELETE FROM produtos WHERE id = ?';
        const values = [id];

        const [rows] = await connection.execute(sql, values);

        if (rows.affectedRows === 0) {
            throw new Error('Produto não encontrado');
        }

        return rows;
    }

};

export default produtoRepository;