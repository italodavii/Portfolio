function toggleDescription(button) {
    const card = button.closest('.project-card'); // Seleciona o card específico
    const description = card.querySelector('.project-description');
    
    if (card.classList.contains('expanded')) {
        card.classList.remove('expanded');
        button.textContent = 'Ver mais';
    } else {
        card.classList.add('expanded');
        button.textContent = 'Ver menos';
    }
}

function showModal(title, description, imageUrl, pageUrl) {
    document.getElementById("modal-title").textContent = title;
    document.getElementById("modal-description").textContent = description;
    document.getElementById("modal-image").src = imageUrl;
    document.getElementById("modal-link").href = pageUrl;
    document.getElementById("description-modal").style.display = "flex";
}

function closeModal() {
    document.getElementById("description-modal").style.display = "none";
}


window.onclick = function(event) {
    if (event.target == document.getElementById("description-modal")) {
        closeModal();
    }
};


function atualizarContadores() {
    // Conta quantos projetos há em cada categoria
    let qtdFinalizado = document.querySelectorAll('.project-card[data-tipo="finalizado"]').length;
    let qtdDesenvolvimento = document.querySelectorAll('.project-card[data-tipo="desenvolvimento"]').length;

    // Atualiza os números nos botões
    document.getElementById('qtd-finalizado').textContent = qtdFinalizado;
    document.getElementById('qtd-desenvolvimento').textContent = qtdDesenvolvimento;
}

function filtrarProjetos(tipo) {
    // Remove a classe 'ativo' de todos os botões
    document.querySelectorAll('.filtro').forEach(btn => btn.classList.remove('ativo'));

    // Adiciona a classe 'ativo' ao botão clicado
    document.querySelector(`.filtro[data-tipo="${tipo}"]`).classList.add('ativo');

    // Filtrar os projetos (mostra apenas os do tipo selecionado)
    document.querySelectorAll('.project-card').forEach(projeto => {
        projeto.style.display = projeto.dataset.tipo === tipo ? 'block' : 'none';
    });
}

// Inicialmente, atualizar contadores e exibir finalizados
document.addEventListener('DOMContentLoaded', () => {
    atualizarContadores();
    filtrarProjetos('finalizado'); // Garante que os finalizados estejam selecionados
});
