javascript
import criarColuna from '../../components/shared/coluna-bootstrap.component.js';
import { listarCarrinho } from '../../storage/produtos/carrinho.storage.js';
import { removerDoCarrinho } from '../../storage/produtos/carrinho.storage.js';


export async function Carrinho() {

    const app = document.querySelector('#app');

    app.innerHTML = 
        <><h1 class="fw-bold text-primary"
        >
            🛒 Carrinho
        </h1><div class="row mt-4" id="lista-produtos"></div><h4 class="mt-4" id="total"></h4></>
    ;

    const row = document.querySelector('#lista-produtos');

    const produtos = listarCarrinho();

    if (produtos.length === 0) {

        row.innerHTML = `
            <p class="text-secondary">
                Seu carrinho está vazio.
            </p>
        `;

        return;
    }

    let total = 0;

    produtos.forEach(produto => {

        total += produto.preco;

        const coluna = criarColuna();

        coluna.innerHTML = `
            <div class="card p-2 h-100">

                <img
                    src="${produto.imagem}"
                    class="card-img-top"
                >

                <div class="card-body">

                    <h5>
                        ${produto.titulo}
                    </h5>

                    <p>
                        R$ ${produto.preco.toFixed(2)}
                    </p>

                    <button class="btn btn-danger">
                     Remover
                    </button>

                </div>

            </div>
        `;

        const button = coluna.querySelector('button');

        button.addEventListener('click', () => {

            removerDoCarrinho(produto.id);

            coluna.remove();
        });

        row.appendChild(coluna);
    });

    document.querySelector('#total').innerHTML = `
        Total: R$ ${total.toFixed(2)}
    `;
}
