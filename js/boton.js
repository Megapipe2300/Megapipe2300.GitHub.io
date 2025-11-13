
        // JavaScript para la funcionalidad del lightbox
        const lightbox = document.getElementById('lightbox');
        const lightboxImg = lightbox.querySelector('img');
        const closeBtn = document.querySelector('.close-btn');
        const gridImages = document.querySelectorAll('.grid img');

        // Abrir lightbox al hacer clic en una imagen
        gridImages.forEach(img => {
            img.addEventListener('click', () => {
                lightbox.classList.add('active');
                lightboxImg.src = img.src;
                lightboxImg.alt = img.alt;
            });
        });

        // Cerrar lightbox al hacer clic en la X
        closeBtn.addEventListener('click', () => {
            lightbox.classList.remove('active');
        });

        // Cerrar lightbox al hacer clic fuera de la imagen
        lightbox.addEventListener('click', (e) => {
            if (e.target !== lightboxImg) {
                lightbox.classList.remove('active');
            }
        });
