const sections = document.querySelectorAll("section");
const bubble = document.querySelector(".bubble");
const links = document.querySelectorAll("li");
console.log(links);
// const gradients = [
//    "linear-gradient(to right, #00b09b, #96c93d)",
//    "linear-gradient(to right, #c94b4b, #4b134f);",
//    "linear-gradient(to right, #24243e, #302b63, #0f0c29)",
// ];

const gradients = ["red", "blue", "green"];
const options = {
   threshold: 0.5,
};

const navCheck = (entries) => {
   entries.forEach((entry) => {
      const className = entry.target.className;
      const activeAnchor = document.querySelector(`[data-page=${className}]`);
      const gradientIndex = entry.target.getAttribute("data-index");

      //links width
      const coords = activeAnchor.getBoundingClientRect();
      const directions = {
         height: coords.height,
         width: coords.width,
         top: coords.top,
         left: coords.left,
      };
      if (entry.isIntersecting) {
         bubble.style.setProperty("left", `${directions.left}px`);
         bubble.style.setProperty("top", `${directions.top}px`);
         bubble.style.setProperty("width", `${directions.width}px`);
         bubble.style.setProperty("height", `${directions.height}px`);
         console.log("GradientIndex: ", gradientIndex);
         bubble.style.background = gradients[gradientIndex];
         links[gradientIndex].style.color = "#ffffff";
         // links[gradientIndex].classList.add("hero");
      } else {
         links[gradientIndex].classList.remove("hero");
      }
   });
};

let observer = new IntersectionObserver(navCheck, options);

sections.forEach((section) => {
   observer.observe(section);
});
