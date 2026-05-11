import { buscarProdutos } from "../../services/produtos/produtos.api.js";
import criarCardProduto from "../../components/produtos/card.component.js";
import criarColuna from "../../components/shared/coluna-bootstrap.component.js";

export async function produtosPage() {
    const app = document.querySelector("#app");

    app.innerHTML = `
        <h1 class="fw-bold text-primary">🛒 Produtos</h1>
        <div class="row mt-4" id="lista-produtos"></div>
    `;

    const row = document.querySelector("#lista-produtos");

    const produtos = await buscarProdutos();

    produtos.forEach(produto => {
        const coluna = criarColuna();

        const card = criarCardProduto(produto);

        coluna.appendChild(card);
        row.appendChild(coluna);
    });
}