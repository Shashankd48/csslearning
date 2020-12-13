const carouselSlide = document.querySelector(".carousel-slide");
const carouselImage = document.querySelectorAll(".carousel-slide img");

// Buttons
const prevBtn = document.querySelector("#prev");
const nextBtn = document.querySelector("#next");

// Counter
let counter = 1;
const size = carouselImage[0].clientWidth;
console.log(size);
carouselSlide.style.transform = "translateX(" + -size * counter + "px)";

// Button Listeners

nextBtn.addEventListener("click", () => {
   // We can add css class here and remove when we want
   if (counter >= carouselImage.length - 1) return;
   console.log(carouselImage.length);
   carouselSlide.style.transition = "transform 0.6s ease-in-out";
   counter++;
   carouselSlide.style.transform = "translateX(" + -size * counter + "px)";
});

prevBtn.addEventListener("click", () => {
   // We can add css class here and remove when we want
   if (counter <= 0) return;
   carouselSlide.style.transition = "transform 0.6s ease-in-out";
   counter--;
   carouselSlide.style.transform = "translateX(" + -size * counter + "px)";
});

carouselSlide.addEventListener("transitionend", () => {
   if (carouselImage[counter].id === "lastClone") {
      carouselSlide.style.transition = "none";
      counter = carouselImage.length - 2;
      carouselSlide.style.transform = "translateX(" + -size * counter + "px)";
   }
   if (carouselImage[counter].id === "firstClone") {
      carouselSlide.style.transition = "none";
      counter = carouselImage.length - counter;
      carouselSlide.style.transform = "translateX(" + -size * counter + "px)";
   }
});
