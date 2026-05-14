export default function criarImagemProdutos(produtos) {
    const img = document.createElement('img'); 
    img.alt = produtos.name;
    img.className = 'card-img-top img-fluid';

    img.style.height = '360px' //como no mobile tem um card só, o tamanho pode ser grande
    img.style.objectFit = produtos.image ? 'cover' : ''; // se tiver imagem, não distorce-la

    img.src = produtos.image ? produtos.image : 'public/default-character.png'; // se não tiver imagem, deve utilizar a imagem default

    return img;
}