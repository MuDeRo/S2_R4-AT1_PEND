export default function criarNavbar() {

    const header = document.querySelector('header');

    const nav = document.createElement('nav');

    nav.className = 'navbar navbar-expand-lg navbar-dark bg-dark shadow-sm';

    nav.innerHTML = `

        <div class="container-fluid">

            
            <a class="navbar-brand fw-bold text-warning" href="#">
                DevStore
            </a>

            
            <button 
                class="navbar-toggler" 
                type="button" 
                data-bs-toggle="collapse" 
                data-bs-target="#menuNavbar"
            >
                <span class="navbar-toggler-icon"></span>
            </button>

            
            <div class="collapse navbar-collapse" id="menuNavbar">

                
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">

                    <li class="nav-item">
                        <button 
                            class="nav-link active text-warning fw-bold border-0 bg-transparent"
                            id="btnProdutos"
                        >
                            Produtos
                        </button>
                    </li>

                    <li class="nav-item">
                        <button 
                            class="nav-link border-0 bg-transparent"
                            id="btnCarrinho"
                        >
                            Carrinho
                        </button>
                    </li>

                </ul>

                
                <form class="d-flex me-3">

                    <input 
                        class="form-control"
                        type="search"
                        placeholder="Pesquisar produto..."
                        id="inputPesquisa"
                    >

                </form>

                
                <button 
                    class="btn btn-warning position-relative"
                    id="btnCarrinhoIcon"
                >

                    Carrinho

                    <span 
                        id="quantidadeCarrinho"
                        class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
                    >
                        0
                    </span>

                </button>

            </div>

        </div>

    `;

    header.appendChild(nav);

    atualizarQuantidadeCarrinho();

}


export function ativarMenu(botaoClicado){

    document.querySelectorAll('.nav-link').forEach(

        btn => {

            btn.classList.remove(
                'active',
                'text-warning',
                'fw-bold'
            );

        }

    );

    botaoClicado.classList.add(
        'active',
        'text-warning',
        'fw-bold'
    );

}


export function atualizarQuantidadeCarrinho(){

    const carrinho = JSON.parse(
        localStorage.getItem('carrinho')
    ) || [];

    let quantidadeTotal = 0;

    carrinho.forEach(produto => {

        quantidadeTotal += produto.quantidade || 1;

    });

    const badgeCarrinho = document.querySelector('#quantidadeCarrinho');

    if(badgeCarrinho){

        badgeCarrinho.textContent = quantidadeTotal;

    }

}