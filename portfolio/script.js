const bar = document.getElementById("bar");
const nav = document.querySelector(".nav");
bar.addEventListener("click", () => {
    nav.classList.toggle("show");
})