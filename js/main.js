let elBtn = document.querySelector(".nav__btn")
let elList = document.querySelector(".nav")

elBtn.addEventListener("click", () => {
    elList.classList.toggle("nav__open")
});