const categories = [
  "all",
  "people",
  "animals",
  "objects",
  "vehicles",
  "food",
  "plants",
  "architecture"
];


const categoriesContainer =
  document.getElementById("categories");

const gallery =
  document.getElementById("gallery");

const overlay =
  document.getElementById("overlay");

const modalImage =
  document.getElementById("modal-image");

const modalDescription =
  document.getElementById("modal-description");

const modalDwg =
  document.getElementById("modal-dwg");

const closeButton =
  document.getElementById("close");

const logo =
  document.getElementById("logo");


/* ================================
   CREAR CATEGORÍAS
================================ */

function createCategories() {

  categoriesContainer.innerHTML = "";

  categories.forEach(function(category) {

    const link =
      document.createElement("a");

    link.href = "#";

    link.textContent = category;

    link.addEventListener(
      "click",
      function(event) {

        event.preventDefault();

        showCategory(category);

      }
    );

    categoriesContainer.appendChild(link);

  });

}


/* ================================
   MOSTRAR CATEGORÍA
================================ */

function showCategory(category) {

  gallery.innerHTML = "";

  let filteredProjects;


  if (category === "all") {

    filteredProjects = projects;

  } else {

    filteredProjects =
      projects.filter(function(project) {

        return project.category === category;

      });

  }


  filteredProjects.forEach(
    function(project) {

      const button =
        document.createElement("button");

      button.className = "project";

      button.type = "button";


      const image =
        document.createElement("img");

      image.src =
        "./images/" + project.image;

      image.alt = "";


      button.appendChild(image);


      button.addEventListener(
        "click",
        function() {

          openModal(project);

        }
      );


      gallery.appendChild(button);

    }
  );

}


/* ================================
   ABRIR VENTANA
================================ */

function openModal(project) {

  modalImage.src =
    "./images/" + project.image;

  modalDescription.textContent =
    project.description;


  if (project.dwg) {

    modalDwg.href =
      "./dwg/" + project.dwg;

    modalDwg.style.display =
      "inline-block";

  } else {

    modalDwg.style.display =
      "none";

  }


  overlay.classList.add("active");

  document.body.classList.add("modal-open");

}


/* ================================
   CERRAR VENTANA
================================ */

function closeModal() {

  overlay.classList.remove("active");

  document.body.classList.remove("modal-open");

}


closeButton.addEventListener(
  "click",
  closeModal
);


overlay.addEventListener(
  "click",
  function(event) {

    if (event.target === overlay) {

      closeModal();

    }

  }
);


document.addEventListener(
  "keydown",
  function(event) {

    if (event.key === "Escape") {

      closeModal();

    }

  }
);


/* ================================
   LOGO
================================ */

logo.addEventListener(
  "click",
  function(event) {

    event.preventDefault();

    showCategory("all");

    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });

  }
);


/* ================================
   INICIAR
================================ */

createCategories();

showCategory("all");
