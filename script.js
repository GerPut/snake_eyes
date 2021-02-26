const random1 = Math.floor(Math.random() * 6 + 1)
const random2 = Math.floor(Math.random() * 6 + 1)

const Eye1 = document.querySelector('.display')
const Eye2 = document.querySelector('.display2')

const fire1 = document.querySelector('.fire1')
const fire2 = document.querySelector('.fire2')



const button = document.querySelector('button')
const message = document.querySelector('h2')

button.addEventListener('click', () => {
    location.reload()
})




function rollDices() {
    Eye1.innerHTML = random1
    Eye2.innerHTML = random2
    if (random1 === 1 && random2 === 1) {
        message.innerHTML = "SNAKE EYES!"
        document.body.classList.add('show1')
        fire1.classList.add('show')
        fire2.classList.add('show')
        Eye1.classList.add('show1')
        Eye2.classList.add('show1')
        document.getElementById('soundeffect').play()

    }

}

rollDices()