let slideIndex = 0;
const slides = document.querySelectorAll('.slide');

function showSlide(index) {
  if (index < 0) {
    slideIndex = slides.length - 1;
  } else if (index >= slides.length) {
    slideIndex = 0;
  }
  const offset = -slideIndex * 100;
  document.querySelector('.slider').style.transform = `translateX(${offset}%)`;
}

function nextSlide() {
  slideIndex++;
  showSlide(slideIndex);
}

function prevSlide() {
  slideIndex--;
  showSlide(slideIndex);
}

setInterval(nextSlide, 3000);