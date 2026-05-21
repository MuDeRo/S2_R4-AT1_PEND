export default function criarImagemProduto(produto) {
    const img = document.createElement('img');
    
    // Tenta encontrar o nome para o alt
    img.alt = produto.name || produto.nome || 'Produto';
    
    // Usa a classe do seu CSS para estilização correta
    img.className = 'product-image';

    // Tenta encontrar o link da imagem em todas as propriedades possíveis
    const urlImagem = `http://localhost:8081${produto.imagem}`
    
    img.src = urlImagem || 'https://via.placeholder.com/150';
    
    // Ajuste de estilo para garantir que a imagem apareça
    img.style.width = '100%';
    img.style.height = '200px';
    img.style.objectFit = 'contain'; 

    return img;
}