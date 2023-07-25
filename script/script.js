// Botão para aparecer menu, quando tela estiver para celulares
const boxBarButton = document.querySelector('.box-bar')
const menu = document.querySelector('.menu')

boxBarButton.addEventListener('click', ()=> {
    boxBarButton.classList.toggle('active')
    menu.classList.toggle('active')
})