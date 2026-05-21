import axios from "axios";

const DOMAIN = 'localhost';
const API_URL = `http://${DOMAIN}:8081`;

export async function buscarProdutos() {
    try {
        const resposta = await axios.get(`${API_URL}/produtos`);
        return resposta.data;
    } catch (error) {
        console.error("Erro ao buscar personagens:", error); // Imprime um erro no console
        return [];
    }
}