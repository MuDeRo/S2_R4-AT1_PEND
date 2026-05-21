import criarImagemProduto from "./imagem.component.js";

export default function criarCardProduto(produto) {
    const card = document.createElement('div');
    
    card.className = 'product-card'; 

    const imageContainer = document.createElement('div');
    imageContainer.className = 'position-relative overflow-hidden';

    const image = criarImagemProduto(produto);
   
    image.className = 'product-image';

    imageContainer.appendChild(image);

    const cardBody = document.createElement('div');
   
    cardBody.className = 'product-info';

    const categoria = document.createElement('span');
    categoria.className = 'text-uppercase small fw-bold text-warning';
    
    categoria.innerText = produto.category || produto.categoria || 'Sem categoria';

    const nome = document.createElement('h3');
    nome.className = 'produto-titulo';
   
    nome.innerText = produto.name || produto.nome || 'Produto sem nome';

    const preco = document.createElement('p');
   
    preco.className = 'produto-preco';
    
    preco.innerText = `R$ ${produto.price || produto.preco || '0,00'}`;

    const estoque = document.createElement('p');
    estoque.className = 'produto-estoque';
    estoque.innerText = produto.estoque > 0 ? `Em estoque: ${produto.estoque}` : 'Produto indisponível';

    const botao = document.createElement('button');
   
    botao.className = 'btn-add-cart';
    botao.innerText = 'Adicionar ao carrinho';

    cardBody.append(categoria, nome, preco, estoque, botao);
    card.append(imageContainer, cardBody);

    return card;
}