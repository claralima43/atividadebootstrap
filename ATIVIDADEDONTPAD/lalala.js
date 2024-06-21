document.addEventListener("DOMContentLoaded", function() {
    const slider = document.querySelector(".slider");
    const slideContainer = slider.querySelector(".slide-container");
    const slides = slider.querySelectorAll(".slide");
    const arrowLeft = slider.querySelector(".arrow-left");
    const arrowRight = slider.querySelector(".arrow-right");
  
    let currentIndex = 0;
    const totalSlides = slides.length;
  
    function nextSlide() {
      if (currentIndex < totalSlides - 1) {
        currentIndex++;
      } else {
        currentIndex = 0;
      }
      updateSlide();
    }
  
    function prevSlide() {
      if (currentIndex > 0) {
        currentIndex--;
      } else {
        currentIndex = totalSlides - 1;
      }
      updateSlide();
    }
  
    function updateSlide() {
      const slideWidth = slides[0].clientWidth; // Obtém a largura do slide
      slideContainer.style.transform = `translateX(${-currentIndex * slideWidth}px)`;
    }
  
    arrowLeft.addEventListener("click", prevSlide);
    arrowRight.addEventListener("click", nextSlide);
  });
  