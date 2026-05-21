import criarImagemProduto from "./imagem.component.js";

export default function criarCardProduto(produto) {
    const card = document.createElement('div');
    card.className = 'card produto-card border-0';

    const imageContainer = document.createElement('div');
    imageContainer.className = 'position-relative overflow-hidden';

    const image = criarImagemProduto(produto);
    image.classList.add('produto-img');

    imageContainer.appendChild(image);

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

    const estoque = document.createElement('p');

    estoque.className = 'produto-estoque';

    if (produto.estoque > 0) {

        estoque.classList.add('em-estoque');

        estoque.innerText =
            `Em estoque: ${produto.estoque}`;

    } else {

        estoque.classList.add('sem-estoque');

        estoque.innerText =
            'Produto indisponível';

    }

    const botao = document.createElement('button');
    botao.className = 'btn btn-primary';
    botao.innerText = 'Adicionar ao carrinho';

    cardBody.append(categoria, nome, preco, estoque, botao);

    card.append(imageContainer, cardBody);

    return card;
}