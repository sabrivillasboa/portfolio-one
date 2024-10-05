const btnMenu = document.querySelector(".btn");
const items = document.querySelector(".ul-menu");

const mostrarItems = () => {
    items.classList.toggle("clickeado");
};

btnMenu.addEventListener("click", mostrarItems);