const checkBtn = () => {
   var button = document.getElementById("fs");
   const card = document.querySelector(".card");
   if (button.checked) {
      card.setAttribute(
         "style",
         "background: linear-gradient(to right, rgb(195, 20, 50), rgb(36, 11, 54))"
      );
   } else {
      card.setAttribute(
         "style",
         "background: linear-gradient(to right, #c5e3f6, #fc5c9c)"
      );
   }
};
