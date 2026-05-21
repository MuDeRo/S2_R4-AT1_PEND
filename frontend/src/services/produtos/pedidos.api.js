import axios from "axios";

const DOMAIN = 'localhost';
const API_URL = `http://${DOMAIN}:8081`; 

export async function registrarPedido(carrinho) {
    try {
        
        const itensMapeados = carrinho.map(produto => ({ // Ajuste para mapear os itens do carrinho
            idProduto: produto.id,
            quantidade: 1, 
            valorItem: parseFloat(produto.price || produto.preco)
        }));

        const payload = { itens: itensMapeados }; // payload é um objeto com a propriedade "itens" que contém o array mapeado, como se fosse os dados que o backend espera receber.

        const resposta = await axios.post(`${API_URL}/pedidos`, payload); // Ajuste da URL conforme necessário

        return resposta.data; // Retorna os dados da resposta, que podem incluir informações do pedido criado

    } catch (error) {
        console.error("Erro ao registrar pedido:", error);
        throw error;
    }
}

export async function buscarPedidos() {
    try {
        const resposta = await axios.get(`${API_URL}/pedidos`);
        return resposta.data.resultado; // Conforme o padrão do seu selecionar: no controller
    } catch (error) {
        console.error("Erro ao buscar pedidos:", error);
        return [];
    }
}