const get = (id) => document.getElementById(id);

const menuIcon = get("menu-icon");
const closeIcon = get("close-icon");
const nav = get("nav");

if (menuIcon && closeIcon && nav) {
    menuIcon.addEventListener("click", () => {
        nav.classList.add("active");
    });

    closeIcon.addEventListener("click", () => {
        nav.classList.remove("active");
    });
}


let slideIndex = 1;
  showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slides[slideIndex - 1].style.display = "block";
}

// inline onclick handlers in index.html need these functions on window
window.plusSlides = plusSlides;
window.currentSlide = currentSlide;






//counter
let width = document.getElementById('width');
var onresize = function() {
   //your code here
   //this is just an example
   width.innerText = document.body.clientWidth;
   width.classList.add('display-width');
   setTimeout(() => {
       width.classList.remove('display-width');
   }, 500000)
}
window.addEventListener("resize", onresize);