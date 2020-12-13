const sections = document.querySelectorAll("section");
const links = document.querySelectorAll(".nav-links");
const lists = document.querySelectorAll("li");
const burger = document.querySelector(".burger");
const options = {
   threshold: 0.5,
};

const navCheck = (entries) => {
   entries.forEach((entry) => {
      const className = entry.target.className;
      const activeAnchor = document.querySelector(`[data-page=${className}]`);
      const index = entry.target.getAttribute("data-index");

      //links width
      const coords = activeAnchor.getBoundingClientRect();
      const directions = {
         height: coords.height,
         width: coords.width,
         top: coords.top,
         left: coords.left,
      };
      if (entry.isIntersecting) {
         links[index].classList.add("bg");
         links[index].style.setProperty("opacity", "1");
      } else {
         links[index].classList.remove("bg");
      }
   });
};

let observer = new IntersectionObserver(navCheck, options);

sections.forEach((section) => {
   observer.observe(section);
});

let navbar = document.getElementById("nav");
window.onscroll = function () {
   "use strict";
   if (
      document.body.scrollTop >= 180 ||
      document.documentElement.scrollTop >= 180
   ) {
      navbar.classList.add("nav-white");
      // navbar.classList.remove("nav-gd");
      burger.classList.add("dark");
   } else {
      //   navbar.classList.add("nav-gd");
      navbar.classList.remove("nav-white");
      burger.classList.remove("dark");
   }
};

// Responsive Navbar
const navslide = () => {
   const nav = document.querySelector(".nav-items");
   const navLinks = document.querySelectorAll(".nav-items li");

   //    Toggle me
   burger.addEventListener("click", () => {
      nav.classList.toggle("nav-active");
      //    Animate Slide
      navLinks.forEach((link, index) => {
         if (link.style.animation) {
            link.style.animation = "";
         } else {
            link.style.animation = `navLinkFade 0.5s forwards ${
               index / 7 + 0.3
            }s`;
         }
      });
      //   Burger animation
      burger.classList.toggle("toggle");
   });
};

navslide();

$(".nav-links").click(function () {
   $(".nav-items").collapse("hide");
});

$("body").scrollspy({
   target: "#nav",
   offset: 70,
});
