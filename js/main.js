// identifica o botão para abrir o menu
const trigger = document.querySelector('.js-trigger')
// identifica o offcanvas menu
const offcanvas = document.querySelector('.js-offcanvas-menu')

trigger.addEventListener('click', toggleOffcanvas)

function toggleOffcanvas() {
    offcanvas.classList.toggle('is-active')
}
