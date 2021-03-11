const inscrevase_btn = document.querySelector("#inscrevase-btn");
const entrar_btn = document.querySelector("#entre-btn");
const container = document.querySelector(".container");

inscrevase_btn.addEventListener('click', () => {
    container.classList.add("inscrevase-mode");
})

entrar_btn.addEventListener('click', () => {
    container.classList.add("entre-mode");
})