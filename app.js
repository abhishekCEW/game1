const image = document.querySelector('.img1')
const button = document.querySelector('.button1')
const pokemon = document.createElement('img')
const start = document.querySelector('.p0')
const pokemon1 = document.querySelector('.pokemon1')
button.addEventListener('click', function genRandNum(){
    const randNum = Math.ceil(Math.random() * 6 );
    image.src = `${randNum}.svg`
    let prevPosition = parseInt(pokemon1.parentNode.getAttribute('class').replace('p', '0')) + randNum
    if (prevPosition < 35){
        nextPosition = document.querySelector(`.p${prevPosition}`)
        nextPosition.appendChild(pokemon1)
    }
    else{
        prevPosition = 0
        nextPosition = document.querySelector(`.p${prevPosition}`)
        nextPosition.appendChild(pokemon1)
    }
})