let card = document.querySelector('.card')

card.addEventListener('mousemove', event => {
    let valueX = event.offsetX
    let valueY = event.offsetY
    let halfHeight = card.offsetHeight / 2
    let halfWidth = card.offsetWidth / 2

    card.style.transform = `rotateX(${(valueY - halfHeight) / 10}deg) rotateY(${(valueX - halfWidth) / 10}deg)`
})