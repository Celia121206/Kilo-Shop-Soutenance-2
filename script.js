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
  });
  

