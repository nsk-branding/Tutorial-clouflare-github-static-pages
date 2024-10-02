// Obtener elementos del DOM
const modal = document.getElementById("modal");
const modalImg = document.getElementById("modal-img");
const captionText = document.getElementById("caption");
const closeBtn = document.getElementsByClassName("close")[0];

// Agregar event listeners a las imágenes
const galleryItems = document.querySelectorAll(".gallery-item");
galleryItems.forEach(item => {
    item.addEventListener("click", function() {
        modal.style.display = "block";
        modalImg.src = this.src; // Muestra la imagen en el modal
        captionText.innerHTML = this.alt; // Muestra la descripción
    });
});

// Cerrar el modal al hacer clic en la "X"
closeBtn.onclick = function() {
    modal.style.display = "none";
}

// Cerrar el modal al hacer clic fuera de la imagen
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}