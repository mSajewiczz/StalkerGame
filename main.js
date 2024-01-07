const hide = document.querySelector('.hide')
const active = document.querySelector('.active')

const on = document.querySelector('.btn-on')
const off = document.querySelector('.btn-off')

const task = document.querySelector('.task')
const one = document.querySelector('.task-one')
const two = document.querySelector('.task-one')
const three = document.querySelector('.task-one')
const four = document.querySelector('.task-one')
const five = document.querySelector('.task-one')


function showNext () {
    one.classList.add('active')
}

function hideFunc () {
    one.classList.remove('active')
}

  on.addEventListener('click', showNext)
    off.addEventListener('click', hideFunc)
