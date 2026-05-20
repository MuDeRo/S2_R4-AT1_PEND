export function salvarNoCarrinho(produto) {
    const carrinho = JSON.parse(localStorage.getItem('carrinho') || '[]');
    const jaExiste = carrinho.some(item => item.name === produto.name);

    if (!jaExiste) {
        carrinho.push(produto);
        localStorage.setItem('carrinho', JSON.stringify(carrinho));
    }
}

export function removerDoCarrinho(produto) {
    const carrinho = JSON.parse(localStorage.getItem('carrinho') || '[]');
    const carrinhoAtualizado = carrinho.filter(item => item.name !== produto.name);
    localStorage.setItem('carrinho', JSON.stringify(carrinhoAtualizado));
}

export function listarCarrinho() {
    return JSON.parse(localStorage.getItem('carrinho') || '[]');
}

export function estaNoCarrinho(produto) {
    const carrinho = listarCarrinho();
    return carrinho.some(item => item.name === produto.name);
}