const projects = document.querySelectorAll(".project");

const overlay = document.getElementById("overlay");
const modalImage = document.getElementById("modal-image");
const modalDescription = document.getElementById("modal-description");
const modalDwg = document.getElementById("modal-dwg");
const closeButton = document.getElementById("close");


projects.forEach(project => {

  project.addEventListener("click", () => {

    const image = project.dataset.image;
    const description = project.dataset.description;
    const dwg = project.dataset.dwg;

    modalImage.src = image;
    modalDescription.textContent = description;
    modalDwg.href = dwg;

    overlay.classList.add("active");

  });

});


closeButton.addEventListener("click", () => {

  overlay.classList.remove("active");

});


overlay.addEventListener("click", (event) => {

  if (event.target === overlay) {

    overlay.classList.remove("active");

  }

});


document.addEventListener("keydown", (event) => {

  if (event.key === "Escape") {

    overlay.classList.remove("active");

  }

});
