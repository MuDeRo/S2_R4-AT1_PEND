const CHAVE = "carrinho";

export function listarCarrinho() {
    return JSON.parse(localStorage.getItem(CHAVE)) || [];
}

export function salvarCarrinho(produto) {
    const carrinho = listarCarrinho();

    carrinho.push(produto);

    localStorage.setItem(CHAVE, JSON.stringify(carrinho));
}

export function removerCarrinho(produto) {
    const carrinho = listarCarrinho();

    const novoCarrinho = carrinho.filter(
        item => item.id !== produto.id
    );

    localStorage.setItem(CHAVE, JSON.stringify(novoCarrinho));
}

export function ehCarrinho(produto) {
    const carrinho = listarCarrinho();

    return carrinho.some(
        item => item.id === produto.id
    );
}