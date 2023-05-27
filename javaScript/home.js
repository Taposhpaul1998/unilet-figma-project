const menuBar = document.querySelector('#menu-bar')
const xmark = document.querySelector('#xmark')
const navbar = document.querySelector('.navbar')

menuBar.onclick = () => {
    navbar.classList.toggle('active')
}
xmark.onclick = () => {
    navbar.classList.remove('active')
}