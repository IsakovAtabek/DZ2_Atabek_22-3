const loop = document.querySelector('.loop')
let x = 0
let y = 0

function loopFunc () {
    setTimeout(() => {
        if(x < 450 && y <= 0) {
            x += 10
            loop.style.left = `${x}px`
        } else if(x >= 450 && y < 450) {
            y += 10
            loop.style.top = `${y}px`
        } else if(x > 0 && y >= 450) {
            x -= 10
            loop.style.left = `${x}px`
        } else if(x <= 0 && y >= 0) {
            y -= 10
            loop.style.top = `${y}px`
        }
        loopFunc()
    }, 40)
}

loopFunc()

const count = document.querySelector('.count')
const startBtn = document.querySelector('.start__btn')
const stopBtn = document.querySelector('.stop__btn')
let counter

startBtn.onclick = () => {
    clearInterval(counter)
    counter = setInterval(() => {
        count.innerHTML++
    }, 1000)
}

stopBtn.onclick = () => {
    clearInterval(counter)
}