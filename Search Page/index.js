let prevBtn = document.querySelector(".left-arrow");
let nextBtn = document.querySelector(".right-arrow");

let cardContainer = document.querySelector(".cards-container");

let containerWidth = cardContainer.getBoundingClientRect().width;

prevBtn.addEventListener("click", () => {
    cardContainer.scrollLeft -= (containerWidth*0.23);
})

nextBtn.addEventListener("click", () => {
    cardContainer.scrollLeft += (containerWidth*0.23);
})