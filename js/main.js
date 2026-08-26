const categoriesContainer = document.getElementById("categories");
const gallery = document.getElementById("gallery");

const overlay = document.getElementById("overlay");
const modal = document.querySelector(".modal");

const modalImage = document.getElementById("modal-image");
const modalDescription = document.getElementById("modal-description");
const modalDwg = document.getElementById("modal-dwg");

const closeButton = document.getElementById("close");

const logo = document.getElementById("logo");


/* --------------------------------------------------
   CATEGORÍAS
-------------------------------------------------- */

function createCategories() {

  categoriesContainer.innerHTML = "";

  categories.forEach(category => {

    const link = document.createElement("a");

    link.href = "#";

    link.textContent = category;

    link.addEventListener("click", event => {

      event.preventDefault();

      showCategory(category);

    });

    categoriesContainer.appendChild(link);

  });

}


/* --------------------------------------------------
   GALERÍA
-------------------------------------------------- */

function showCategory(category) {

  gallery.innerHTML = "";

  let filteredProjects;


  if (category === "all") {

    filteredProjects = projects;

  } else {

    filteredProjects = projects.filter(
      project => project.category === category
    );

  }


  filteredProjects.forEach(project => {

    const button = document.createElement("button");

    button.className = "project";

    button.type = "button";


    const image = document.createElement("img");

    image.src = "images/" + project.image;

    image.alt = "";


    button.appendChild(image);


    button.addEventListener("click", () => {

      openModal(project);

    });


    gallery.appendChild(button);

  });

}


/* --------------------------------------------------
   MODAL
-------------------------------------------------- */

function openModal(project) {

  modalImage.src = "images/" + project.image;

  modalDescription.textContent = project.description;


  if (project.dwg) {

    modalDwg.href = "dwg/" + project.dwg;

    modalDwg.style.display = "inline-block";

  } else {

    modalDwg.style.display = "none";

  }


  overlay.classList.add("active");

  document.body.classList.add("modal-open");

}


function closeModal() {

  overlay.classList.remove("active");

  document.body.classList.remove("modal-open");

}


/* --------------------------------------------------
   CERRAR MODAL
-------------------------------------------------- */

closeButton.addEventListener(
  "click",
  closeModal
);


overlay.addEventListener(
  "click",
  event => {

    if (event.target === overlay) {

      closeModal();

    }

  }
);


document.addEventListener(
  "keydown",
  event => {

    if (event.key === "Escape") {

      closeModal();

    }

  }
);


/* --------------------------------------------------
   LOGO
-------------------------------------------------- */

logo.addEventListener(
  "click",
  event => {

    event.preventDefault();

    gallery.innerHTML = "";

    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });

  }
);


/* --------------------------------------------------
   INICIAR
-------------------------------------------------- */

createCategories();

showCategory("all");
