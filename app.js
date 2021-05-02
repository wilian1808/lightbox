const allImages = document.querySelectorAll('.main__image')
const cancelModal = document.getElementById('cancelModal')
const imageModal = document.getElementById('imageModal')
const buttonNext = document.getElementById('buttonNext')
const buttonPrev = document.getElementById('buttonPrev')
const gallery = document.getElementById('gallery')
const modal = document.getElementById('modal')

gallery.addEventListener('click', e => {
    if (e.target.classList.contains('main__image')) {   
        const routesImages = []
        allImages.forEach(e => routesImages.push(e.src))
        const indice = e.target.dataset.index - 1
        imageModal.src = routesImages[indice]
        modal.classList.toggle('modal--active')
    }
})

buttonNext.addEventListener('click', () => {
    const routesImages = []
    allImages.forEach(e => routesImages.push(e.src))
    const current = routesImages.indexOf(imageModal.src)
    imageModal.src = (current == routesImages.length-1) ? routesImages[0] : routesImages[current+1]
})

buttonPrev.addEventListener('click', () => {
    const routesImages = []
    allImages.forEach(e => routesImages.push(e.src))
    const current = routesImages.indexOf(imageModal.src)
    imageModal.src = (current == 0) ? routesImages[5] : routesImages[current-1]
})

cancelModal.addEventListener('click', () => modal.classList.toggle('modal--active'))