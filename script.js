const logo = document.querySelector('.gif-kiloshop')
let isHidden = false

window.addEventListener('scroll', function () {
    if (window.scrollY > 300 && !isHidden) {
        logo.style.opacity = '0'
        logo.style.transition = 'opacity 0.2s ease-in-out'
        isHidden = true
        setTimeout(() => {
            if (isHidden) logo.style.display = 'none'
        }, 200)
    } else if (window.scrollY <= 300 && isHidden) {
        logo.style.display = 'block'
        requestAnimationFrame(() => {
            logo.style.opacity = '1'
            logo.style.transition = 'opacity 0.5s ease-in-out'
        })
        isHidden = false
    }
})


