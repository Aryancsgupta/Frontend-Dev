/*
  Image Gallery with Modal
  - Click image → show modal
  - Click outside modal-content → close modal
  - stopPropagation() prevents close when clicking inside
*/

const galleryImages = document.querySelectorAll(".gallery-img");
const modal = document.getElementById("modal");
const modalImg = document.getElementById("modalImg");
const modalContent = document.querySelector(".modal-content");

/* Show modal on image click */
galleryImages.forEach(img => {
  img.addEventListener("click", () => {
    modal.style.display = "flex";
    modalImg.src = img.src;
  });
});

/* Close modal when clicking outside */
modal.addEventListener("click", () => {
  modal.style.display = "none";
});

/* Prevent close when clicking inside modal */
modalContent.addEventListener("click", (e) => {
  e.stopPropagation();
});
