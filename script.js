
        window.addEventListener('scroll', () => {
            const scrollY = window.scrollY;
            const logo = document.querySelector('.gif-kiloshop');
            const title = document.querySelector('.hero-title');
            const description = document.querySelector('.hero-description');
            const overlay = document.getElementById('overlay');
            const bg = document.getElementById('bg');

            // LOGO FADE OUT (0 -> 300px)
            if (scrollY <= 300) {
                logo.style.opacity = 1 - scrollY / 300;
            }

            // TITLE FADE IN (200 -> 500px)
            if (scrollY > 200 && scrollY < 500) {
                title.style.opacity = (scrollY - 200) / 300;
            } else if (scrollY <= 200) {
                title.style.opacity = 0;
            }

            // ZOOM BACKGROUND (max 1.1 scale up to 900px)
            const zoom = Math.min(1.1, 1 + scrollY / 5000);
            bg.style.transform = `scale(${zoom})`;
        });

 

