import { registrarPedido } from "../../services/produtos/pedidos.api.js";
import { listarCarrinho } from "../../storage/produtos/carrinho.storage.js";

export default function criarBotaoFinalizar() {
    const btn = document.createElement("button");
    btn.className = "btn-add-cart mt-4 w-100"; // Reaproveita o teu estilo existente
    btn.style.backgroundColor = "var(--success)"; // Verde
    btn.innerText = "Finalizar Pedido";

    btn.addEventListener("click", async () => {
        const carrinho = listarCarrinho();
        
        if (carrinho.length === 0) {
            alert("O carrinho está vazio!");
            return;
        }

        try {
            btn.innerText = "A processar...";
            btn.disabled = true;

            await registrarPedido(carrinho);

            alert("Pedido realizado com sucesso!");
            
            // Limpa o carrinho e recarrega a página
            localStorage.removeItem('carrinho'); 
            window.location.reload(); 
            
        } catch (error) {
            alert("Erro ao finalizar pedido. Tente novamente.");
            btn.innerText = "Finalizar Pedido";
            btn.disabled = false;
        }
    });

    return btn;
}