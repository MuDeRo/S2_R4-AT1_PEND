export function criarBotaoCarrinho(carrinho = false) {

    const button = document.createElement('button');

    button.className = `
        btn p-0 border-0 rounded-circle
        d-flex align-items-center justify-content-center
        bg-light bg-opacity-75
    `;

    button.style.width = '40px';
    button.style.height = '40px';

    const icon = document.createElement('span');
    icon.className = 'material-symbols-outlined';

    icon.innerText = 'shopping_cart';

    button.appendChild(icon);

    return button;
}

export function criarBotaoFinalizar() {

    const button = document.createElement('button');

    button.className = `
        btn border-0 rounded-pill
        d-flex align-items-center justify-content-center
        bg-success text-white fw-bold
    `;

    button.style.height = '45px';

    button.innerText = 'Finalizar Pedido';

    button.addEventListener('click', async () => {

        const carrinho = listarCarrinho();

        if (carrinho.length === 0) {
            alert('O carrinho está vazio!');
            return;
        }

        try {

            button.innerText = 'Processando...';
            button.disabled = true;

            await registrarPedido(carrinho);

            alert('Pedido realizado com sucesso!');

            localStorage.removeItem('carrinho');

        } catch (error) {

            alert('Erro ao finalizar pedido!');

            button.innerText = 'Finalizar Pedido';
            button.disabled = false;
        }
    });

    return button;
}