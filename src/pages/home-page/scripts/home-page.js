/// Homepage JavaScript File
/// Here we import all the JavaScript files we need for our homepage.

import '../styles/home-page.scss'

const colors = document.querySelectorAll('.card-component__colorway');
const addToBasketBtn = document.querySelector('.card-component__addToBasketButton')

let selectedColor = 'różowym';


colors.forEach(col => {
    col.addEventListener('click', event => {
        colors.forEach(e => e.classList.remove('selected'))
        event.target.classList.add('selected')
        selectedColor = event.target.value

    })
})


addToBasketBtn.addEventListener('click', () => {
    alert(`Portfel w kolorze ${selectedColor} został dodany do koszyka.`)
})