const hero = document.querySelector(".hero");
// const main = document.querySelector(".main");
const slider = document.querySelector(".slider");
const logo = document.querySelectorAll(".logo");
const menu = document.querySelector(".menu");
const headline = document.querySelector(".headline");

const t1 = new TimelineMax();

t1.fromTo(hero, 1, { height: "0%" }, { height: "100%", ease: Power2.easeInOut })
   .fromTo(
      hero,
      1.2,
      { width: "100%" },
      { width: "90%", ease: Power2.easeInOut }
   )
   .fromTo(slider, 1.2, { x: "-100%" }, { x: "0%" }, "-=0.7")
   .fromTo(logo, 0.5, { opacity: 0, x: 30 }, { opacity: 1, x: 0 }, "-=0.2");

// { height: "100%", ease: Power2.easeInOut }
