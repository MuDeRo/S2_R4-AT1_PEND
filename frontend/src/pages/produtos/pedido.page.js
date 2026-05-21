import criarCardProduto from "../../components/produtos/card.component.js";
import criarColuna from "../../components/shared/coluna-bootstrap.component.js";
import { buscarPedidos } from "../../services/produtos/pedidos.api.js";



export default async function pedidoPage() {
    const app = document.querySelector("#app");
    
    // Estrutura principal utilizando a classe de container que definimos no CSS
    app.innerHTML = `
        <div class="pedidos-container">
            <div class="pedidos-header">
                <h1 class="fw-bold">Meus Pedidos</h1>
            </div>
            <div id="lista-pedidos-banco"></div>
        </div>
    `;

    const container = document.querySelector("#lista-pedidos-banco");

    // Busca os dados da API 
    const pedidos = await buscarPedidos();

    if (!pedidos || pedidos.length === 0) {
        container.innerHTML = `<p class="text-muted">Você ainda não realizou nenhum pedido.</p>`;
        return;
    }

    pedidos.forEach(pedido => {
        const div = document.createElement("div");
        
        // MUDANÇA: Agora usa 'pedido-card' em vez das classes nativas do Bootstrap
        div.className = "pedido-card";

        div.innerHTML = `
            <div class="pedido-info-main">
                <h5>Pedido #${pedido.id}</h5>
                <span class="pedido-data">
                    Realizado em: ${new Date(pedido.data_pedido).toLocaleDateString()}
                </span>
            </div>
            <div class="pedido-status-valor">
                <span class="status-badge status-${pedido.status.toLowerCase()}">
                    ${pedido.status.toUpperCase()}
                </span>
                <span class="pedido-valor-final">R$ ${pedido.valor_total}</span>
            </div>
        `;
        container.appendChild(div);
    });
}