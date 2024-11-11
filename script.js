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
