function changeImage(el){
  document.getElementById("mainImg").src = el.src;
  document.querySelectorAll('.thumb').forEach(img => img.classList.remove('active'));
  el.classList.add('active');
}

function goToBuy(){
  window.location.href = "buy.html"; // change link to your buy page
}



let slideIndex = 0;
const slides = document.querySelector('.slides');
const totalSlides = document.querySelectorAll('.slide').length;

function autoScroll() {
  slideIndex = (slideIndex + 1) % totalSlides;
  slides.style.transform = `translateX(-${slideIndex * 100}%)`;
}

setInterval(autoScroll, 4000); // 4 sec scroll