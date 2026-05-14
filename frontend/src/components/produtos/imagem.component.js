export default function criarImagemProduto(produto) {
    const img = document.createElement('img');
    img.alt = produto.name;
    img.className = 'card-img-top';

    img.style.width = '100%';
    img.style.height = '200px';
    img.style.objectFit = produto.image ? 'cover' : '';

    img.src = produto.image ? produto.image : 'https://via.placeholder.com/150';
    return img;
}