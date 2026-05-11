import axios from "axios";

const API_URL = 'http://10.87.169.65:8081';

export async function buscarProdutos() {
    try {
        const resposta = await axios.get(API_URL);
        return resposta.data;
    } catch (error) {
        console.error("Erro ao buscar personagens:", error); // Imprime um erro no console
        return [];
    }
}
