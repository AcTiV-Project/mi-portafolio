document.addEventListener("DOMContentLoaded", () => {
      var hamburger = document.querySelector(".hamburger");
      var aside = document.querySelector(".aside");
      
      hamburger.addEventListener("click", () => {
            var visible = document.querySelector(".visible");

            if(!visible){
                  aside.classList.toggle("aside--visible");
            }
      }); 
});