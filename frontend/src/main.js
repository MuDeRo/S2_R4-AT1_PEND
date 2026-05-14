import criarNavbar, {ativarMenu} from './components/layout/navbar.component.js';
import { produtosPage } from './pages/produtos/produtos.page.js';
import  carrinhoProdutosPage  from './pages/produtos/carrinho.page.js'

criarNavbar();
produtosPage();
carrinhoProdutosPage();

const btnHome = document.querySelector('#btnHome');
const btnCarrinho = document.querySelector('#btnCarrinho');

btnHome.addEventListener('click', ()=>{ // clicou no botao, renderiza a pagina home 
  ativarMenu(btnHome);
  produtosPage();
});

btnCarrinho.addEventListener('click', ()=>{ // clicou no botao, renderiza a pagina carrinho
  ativarMenu(btnCarrinho);
  carrinhoProdutosPage();
})