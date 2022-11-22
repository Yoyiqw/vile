const selectorOpen = document.querySelector(".sort__open");
const sortIcon = document.querySelector(".sort__open svg")
const sortSelect = document.querySelector(".sort__select");

selectorOpen.addEventListener("click", () => {
    console.log("qwerf");
    selectorOpen.classList.toggle("active");
    if(selectorOpen.classList.contains("active")) {
        sortIcon.style.transform = "rotate(180deg)";
    } else {
        sortIcon.style.transform = "rotate(0deg)";
    }
});
