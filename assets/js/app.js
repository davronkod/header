const overflowEl = document.querySelector(".overflow");
const registrEl = document.querySelector(".registr");
const formEl = document.querySelector(".form");
const closeEl = document.querySelector(".bi-x-lg");
const openEye = document.querySelector(".bi-eye");
const closeEye = document.querySelector(".bi-eye-slash");
const passwordEl = document.querySelector("#password");
const toxicEl = document.querySelector(".toxic");

const sidebarEl = document.querySelector(".sidebar");
const menuEl = document.querySelector(".bi-list");

menuEl.addEventListener("click", () => {
    sidebarEl.style.marginLeft = "0";
    overflowEl.style.display = "block";
    sidebarEl.style.display = "block"
});

closeEye.addEventListener("click", () => {
    closeEye.style.display = "none";
    openEye.style.display = "block";
    passwordEl.setAttribute("type", "text");
});

openEye.addEventListener("click", () => {
    closeEye.style.display = "block";
    openEye.style.display = "none";
    passwordEl.setAttribute("type", "password");
});

registrEl.addEventListener("click", () => {
    overflowEl.style.display = "block";
    formEl.style.display = "flex";
});
toxicEl.addEventListener("click", () => {
    overflowEl.style.display = "block";
    formEl.style.display = "flex";
    sidebarEl.style.display = "none"
})
overflowEl.addEventListener("click", () => {
    overflowEl.style.display = "none";
    formEl.style.display = "none";
    sidebarEl.style.marginLeft = "-50%";
});

closeEl.addEventListener("click", () => {
    overflowEl.style.display = "none";
    formEl.style.display = "none";
});
