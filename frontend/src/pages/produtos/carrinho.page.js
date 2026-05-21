import criarCardProduto from "../../components/produtos/card.component.js";
import criarColunas from "../../components/shared/coluna-bootstrap.component.js";
import { listarCarrinho, removerDoCarrinho } from "../../storage/produtos/carrinho.storage.js";

export default function carrinhoProdutosPage() {
  const app = document.querySelector("#app");
  
  
  app.innerHTML = `
    <div class="products-page">
      <h1 class="titulo-pagina text-center">Carrinho</h1>
      <div class="products-grid" id="lista-carrinho"></div>
    </div>
  `;

  const row = document.querySelector("#lista-carrinho");
  const carrinho = listarCarrinho();

  carrinho.forEach(produto => {
    const card = criarCardProduto(produto);
    const button = card.querySelector("button");

    
    button.style.backgroundColor = "var(--danger)";
    button.innerText = "Remover do carrinho";

    button.addEventListener("click", () => {
      removerDoCarrinho(produto);
      card.remove(); // Remove o card direto
    });

    row.appendChild(card);
  });
}