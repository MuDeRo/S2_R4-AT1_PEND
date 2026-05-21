import criarCardProduto
from "../../components/produtos/card.component.js";

import criarColuna
from "../../components/shared/coluna-bootstrap.component.js";

import criarResumoPedido
from "../../components/produtos/resumo-pedido.component.js";

export default function pedidoPage() {

    const app = document.querySelector("#app");

    app.innerHTML = `
        <h1 class="fw-bold text-primary">
            Pedido
        </h1>

        <div class="row mt-4" id="lista-pedido"></div>

        <div id="resumo-pedido" class="mt-4"></div>
    `;

    const row =
        document.querySelector("#lista-pedido");

    const carrinho =
        JSON.parse(
            localStorage.getItem("carrinho")
        ) || [];

    if (carrinho.length === 0) {

        row.innerHTML = `
            <p>Carrinho vazio</p>
        `;

        return;
    }

    let totalItens = 0;
    let valorTotal = 0;

    carrinho.forEach(produto => {

        const coluna = criarColuna();

        const card =
            criarCardProduto(produto);

        const button =
            card.querySelector("button");

        button.innerText = "Remover";

        button.addEventListener("click", () => {

            removerProduto(produto.id);

        });

        coluna.appendChild(card);

        row.appendChild(coluna);

        totalItens += produto.quantidade;

        valorTotal +=
            produto.preco * produto.quantidade;
    });

    const resumo =
        criarResumoPedido(
            totalItens,
            valorTotal
        );

    document
        .querySelector("#resumo-pedido")
        .appendChild(resumo);

    adicionarEventoFinalizar();
}

function removerProduto(id) {

    const carrinho =
        JSON.parse(
            localStorage.getItem("carrinho")
        ) || [];

    const novoCarrinho =
        carrinho.filter(produto =>
            produto.id !== id
        );

    localStorage.setItem(
        "carrinho",
        JSON.stringify(novoCarrinho)
    );

    location.reload();
}

function adicionarEventoFinalizar() {

    const button =
        document.querySelector(
            "#finalizar-pedido"
        );

    button.addEventListener("click", () => {

        alert("Pedido realizado!");

        localStorage.removeItem(
            "carrinho"
        );

        location.hash = "#/produtos";
    });
}