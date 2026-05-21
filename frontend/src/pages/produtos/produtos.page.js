import {buscarProdutos} from "../../services/produtos/produtos.api.js" 

import criarCardProduto from "../../components/produtos/card.component.js"
import criarColuna from "../../components/shared/coluna-bootstrap.component.js"

export async function produtosPage() {
  const app = document.getElementById("app");

  app.innerHTML = `
    <section class="products-page">
      <h2>Lista de Produtos</h2>

      <div id="products-container" class="products-grid">
        <p>Carregando produtos...</p>
      </div>
    </section>
  `;
  const produtos = await buscarProdutos();

  renderProdutos(produtos);
}

function renderProdutos(produtos) {
  const container = document.getElementById("products-container");

  if (!produtos.length) {
    container.innerHTML = `<p>Nenhum produto encontrado.</p>`;
    return;
  }

  console.log(produtos);

  container.innerHTML = produtos.map(produto => `
    <div class="product-card">

      <img
        src="http://localhost:8081${produto.imagem}"
        alt="${produto.nome}"
        class="product-image"
      />      

      <h3>${produto.nome}</h3>

      <p class="price">
        R$ ${Number(produto.preco).toFixed(2)}
      </p>

      <p class="estoque">
        Estoque: ${Number(produto.estoque)}
      </p>

      <button
        class="btn-add-cart"
        data-id="${produto.id}"
      >
        Adicionar ao carrinho
      </button>
    </div>
  `).join("");

  addCartEvents(produtos);
}

function addCartEvents(produtos) {
  const buttons = document.querySelectorAll(".btn-add-cart");

  buttons.forEach(button => {
    button.addEventListener("click", () => {

      const productId = Number(button.dataset.id);

      const produtoSelecionado = produtos.find(
        produto => produto.id === productId
      );

      adicionarAoCarrinho(produtoSelecionado);
    });
  });
}

function adicionarAoCarrinho(produto) {

  const carrinho =
    JSON.parse(localStorage.getItem("carrinho")) || [];

  const itemExistente = carrinho.find(
    item => item.id === produto.id
  );

  if (itemExistente) {

    itemExistente.quantidade += 1;

  } else {

    carrinho.push({
      ...produto,
      quantidade: 1
    });
  }

  localStorage.setItem(
    "carrinho",
    JSON.stringify(carrinho)
  );

  atualizarContadorCarrinho();

  alert("Produto adicionado ao carrinho!");
}

export function atualizarContadorCarrinho() {

  const carrinho =
    JSON.parse(localStorage.getItem("carrinho")) || [];

  const totalItens = carrinho.reduce(
    (total, item) => total + item.quantidade,
    0
  );

  const cartCount = document.getElementById("cart-count");

  if (cartCount) {
    cartCount.textContent = totalItens;
  }
}