
const logo = document.querySelector('.gif-kiloshop')
let isHidden = false
window.addEventListener('scroll', function () {
  if (window.scrollY > 300 && !isHidden) {
    logo.style.opacity = '0'
    logo.style.transition = 'opacity 0.3s ease-in-out'
    isHidden = true
    setTimeout(() => {
      if (isHidden) logo.style.display = 'none'
    }, 200)
  } else if (window.scrollY <= 300 && isHidden) {
    logo.style.display = 'block'
    requestAnimationFrame(() => {
      logo.style.opacity = '1'
      logo.style.transition = 'opacity 0.2s ease-in-out'
    })
    isHidden = false
  }
})

document.addEventListener("DOMContentLoaded", () => {
    const images = document.querySelectorAll(".card img");
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            }
        });
    }, {
        threshold: 0.7
    });
    images.forEach((img) => {
        observer.observe(img);
    });


    const prevBtn = document.getElementById('prev');
    const nextBtn = document.getElementById('next');
    const carousel = document.querySelector('.affiche-reduite');
    let currentSlide = 0;
    const totalSlides = carousel.children.length;

    function updateCarousel() {
        const slideWidth = carousel.offsetWidth / totalSlides;
        carousel.style.transform = `translateX(-${currentSlide * slideWidth}px)`;
        console.log('Current slide:', currentSlide); 
    }

    nextBtn.addEventListener('click', () => {
        if (currentSlide < 3) { 
            currentSlide++;
        } else {
            currentSlide = 0;
        }
        updateCarousel();
    });

    prevBtn.addEventListener('click', () => {
        console.log('Prev clicked, current:', currentSlide); 
        if (currentSlide > 0) {
            currentSlide--;
        } else {
            currentSlide = 3; 
        }
        updateCarousel();
    });
});



