var iconBox = document.querySelectorAll(".iconBox");
var contentBx = document.querySelectorAll(".contentBx");

console.log(iconBox[0].dataset.id);

for (var i = 0; i < iconBox.length; i++) {
   iconBox[i].addEventListener("mouseover", function () {
      for (var i = 0; i < contentBx.length; i++) {
         contentBx[i].className = "contentBx";
      }
      document.getElementById(this.dataset.id).className = "contentBx active";

      for (var i = 0; i < iconBox.length; i++) {
         iconBox[i].className = "iconBox";
      }
      this.className = "iconBox active";
   });
}
