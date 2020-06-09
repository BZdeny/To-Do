'use strict'
dateInput('date')
function dateInput(n) {
    const dateHere = new Date()
    let dateElement = document.getElementById(n)
    dateElement.textContent = weekDate(dateHere) + '. ' + monthDate(dateHere) + ' ' + dateHere.getDate();
}
function weekDate(date) {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednsday', 'Thursday','Friday', 'Saturday' ]
    return days[date.getDay()]
}
function monthDate(date) {
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    return months[date.getMonth()]
}

let listArray = []
let arrayId = 0;
(function enterKey() {
    document.querySelector('input').addEventListener('keyup', function(e) {
        if (e.keyCode === 13) {
            let inputOut = this.value
            if (inputOut) {
                plusList(inputOut, arrayId, false, false)
                listArray.push ({
                    name: inputOut,
                    id: arrayId,
                    done: false,
                    trash: false         
                })
                arrayId++
                console.log(listArray)
            }
        }
    })
})()
const doneCircle = 'fa-check-circle'
const undoneCircle = 'fa-circle-thin'   
const lineThrought = 'lineThrought'

function plusList(n, id, done, trash) {
    if (trash) {return;}
    const doneChange = done ? doneCircle : undoneCircle
    const doneThrought = done ? lineThrought : ''
    let text = `<li class="block"> <i class="fa ${doneChange}" aria-hidden="true" id="${id}" job="complete"></i><p class="text ${doneThrought}">${n}</p><i class="fa fa-trash" aria-hidden="true" job ="delete"></i></li>`
    document.getElementById('list').insertAdjacentHTML('beforeend', text)
    document.querySelector('input').value = ''
    }
    
function completeToDo(complete) {
    complete.classList.toggle(doneCircle)
    complete.classList.toggle(undoneCircle)
    complete.parentNode.querySelector('.text').classList.toggle(lineThrought)
    listArray[complete.id].done = listArray[complete.id].done ? false : true
    }

function removeElement(remove) {
    remove.parentNode.parentNode.removeChild(remove.parentNode)
    //listArray.splice()
}

const list = document.getElementById('list')
list.addEventListener('click', (event)=>{
    let element = event.target
    const complete = event.target.attributes.job.value
    if (complete === 'complete'){
        completeToDo(element)
    }
    if (complete === 'delete'){
        removeElement(element)
    }
})
