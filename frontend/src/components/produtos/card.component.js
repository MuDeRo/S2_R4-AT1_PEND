import criarImagemProduto from "./imagem.component.js";
import { criarBotaoCarrinho } from "./botao.component.js";

import {salvarCarrinho,removerCarrinho,ehCarrinho} from "../../storage/produtos/carrinho.storage.js";

export default function criarCardProduto(produto) {
    const card = document.createElement('div');
    card.className = 'card produto-card border-0';

    const imageContainer = document.createElement('div');
    imageContainer.className = 'position-relative overflow-hidden';

    const image = criarImagemProduto(produto);
    image.classList.add('produto-img');

    const btnContainer = document.createElement('div');
    btnContainer.className = 'position-absolute top-0 end-0 m-2';

    let carrinho = ehCarrinho(produto);

    if (carrinho) {
        card.classList.add('carrinho');
    }

    const button = criarBotaoCarrinho();

    button.addEventListener('click', () => {
        carrinho = !carrinho;

        card.classList.toggle('carrinho', carrinho);

        if (carrinho) {
            salvarCarrinho(produto);
        } else {
            removerCarrinho(produto);
        }
    });

    btnContainer.appendChild(button);

    imageContainer.append(image, btnContainer);

    const cardBody = document.createElement('div');
    cardBody.className = 'card-body';

    const categoria = document.createElement('span');
    categoria.className = 'text-uppercase small fw-bold text-warning';
    categoria.innerText = produto.category || 'Sem categoria';

    const nome = document.createElement('h5');
    nome.className = 'card-title fw-bold mt-1 mb-2';
    nome.innerText = produto.name;

    const preco = document.createElement('p');
    preco.className = 'card-text';
    preco.innerText = `R$ ${produto.price}`;

    cardBody.append(categoria, nome, preco);

    card.append(imageContainer, cardBody);

    return card;
}