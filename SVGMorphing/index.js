const moonPath =
   "M623.148,306.732a49.983,49.983,0,0,1-40.557-79.248,50.125,50.125,0,0,1,24.082-17.974,50.015,50.015,0,0,0,47.987,86.045,49.793,49.793,0,0,1-31.511,11.177Z";
const sunPath = "M50,0A50,50,0,1,1,0,50,50,50,0,0,1,50,0Z";

const darkMode = document.querySelector("#darkMode");

let toggle = false;

darkMode.addEventListener("click", () => {
   // We need to sue anime.js

   // Here we set up timeline
   const timeline = anime.timeline({
      duration: 750,
      easing: "easeOutExpo",
   });

   // Add animation to the timeline
   timeline.add({
      targets: ".sun",
      d: [{ value: moonPath }],
   });
});
