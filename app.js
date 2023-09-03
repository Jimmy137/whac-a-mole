let score = 0
let timeLeft = 10
const scoreDisplay = document.querySelector('#score')
const timeLeftDisplay = document.querySelector('#time-left')

scoreDisplay.innerHTML = score
timeLeftDisplay.innerHTML = timeLeft

let timerId = null



const gridDisplay = document.querySelector('.grid')
const generate = ()=> {
    for (let i = 1; i < 10; i++) {
        const square = document.createElement('div')
        square.setAttribute('data-id', i)
        square.setAttribute('class', 'square')
        gridDisplay.append(square)
    }
}
generate()

const squares = document.querySelectorAll('.square')
const mole = document.querySelector('.mole')

const randomSquareFunc = () => {
    squares.forEach(square => {
        square.classList.remove('mole')
    })

    let randomSquare = squares[Math.floor(Math.random() * 9)]
    randomSquare.classList.add('mole')
}

const moveMole = ()=> {
    timerId = setInterval(randomSquareFunc, 700)
}

moveMole()

squares.forEach(square => square.addEventListener('mousedown', (e) => {
    if (e.target.classList.contains('mole') && timerId){
        score ++;
        scoreDisplay.innerHTML = score
    }
}))

const countDown = ()=> {
    timeLeft-= 1
    timeLeftDisplay.innerHTML = timeLeft
    if (timeLeft == 0){
        clearInterval(countDownVar)
        clearInterval(timerId)
        timerId = null
        squares.forEach(square => {
            square.classList.remove('mole')
        })
        alert('Game is over!\n Your final score is ' + score)
    }
}

let countDownVar= setInterval(countDown, 1000)

