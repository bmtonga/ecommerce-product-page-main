document.getElementById("close-icon").addEventListener("click", function() {
  document.getElementById("nav").classList.remove("active");
});

document.querySelector(".menu-icon").addEventListener("click", function() {
  document.getElementById("nav").classList.add("active");
});

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