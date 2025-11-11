//funcionalidad para agrandar la imagen

const lightbox = document.createElement('div')
lightbox.id = 'lightbox'
document.body.appendChild(lightbox)

const imagen = document.querySelectorAll('img')
imagen.forEach(imagen => {
    imagen.addEventListener('click', e => {
        lightbox.classList.add('active')
        const img = document.createElement('img')
        img.src = imagen.src
        while (lightbox.firstChild) {
            lightbox.removeChild(lightbox.firstChild)

        }
        lightbox.appendChild(img)
        
    })
})

//funcion para mover las fotos agrandadas

lightbox.addEventListener('click', e => {
    if (e.target !== e.currentTarget) return
    lightbox.classList.remove('active')



})