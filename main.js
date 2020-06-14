'use strict'

function loadList(array){
    array.forEach(function(item) {
        plusList(item.name, item.id, item.done, item.trash)
    });
}

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
let inputOut
(function enterKey() {
    document.querySelector('input').addEventListener('keyup', function(e) {
        if (e.keyCode === 13) {
            inputOut = this.value
            if (inputOut) {
                plusList(inputOut, arrayId, false, false)
                listArray.push ({
                    name: inputOut,
                    id: arrayId,
                    done: false,
                    trash: false         
                })
                localStorage.setItem("ToDo", JSON.stringify(listArray))
                arrayId++
            }
        }
    })
})()

const plusItem = document.getElementById('plusItem')
plusItem.addEventListener('click', () => {
    inputOut = document.querySelector('input').value
    if (inputOut) {
        plusList(inputOut, arrayId, false, false)
        listArray.push ({
            name: inputOut,
            id: arrayId,
            done: false,
            trash: false
        })
    localStorage.setItem("ToDo", JSON.stringify(listArray))
    }
        arrayId++
    }
)

const doneCircle = 'fa-check-circle'
const undoneCircle = 'fa-circle-thin'   
const lineThrough = 'active'

let data = localStorage.getItem("ToDo")

if(data){
    listArray = JSON.parse(data)
    arrayId = listArray.length
    loadList(listArray)
} else {
    listArray = []
    arrayId = 0
}

function plusList(n, id, done, trash) {
    if (trash) {return;}
    const doneChange = done ? doneCircle : undoneCircle
    const doneThrough = done ? lineThrough : ''
    let text = `<li class="block"> <i class="fa ${doneChange}" aria-hidden="true" id="${id}" job="complete"></i><p class="text" class="${doneThrough}">${n}</p><i class="fa fa-trash" aria-hidden="true" job ="delete"></i></li>`
    console.log(text)
    document.getElementById('list').insertAdjacentHTML('beforeend', text)
    document.querySelector('input').value = ''
    }
    
function completeToDo(complete) {
    complete.classList.toggle(doneCircle)
    complete.classList.toggle(undoneCircle)
    complete.parentNode.querySelector('.text').classList.toggle(lineThrough)
    listArray[complete.id].done = true
    }

function removeElement(remove) {
    remove.parentNode.parentNode.removeChild(remove.parentNode)
    listArray[remove.id].trash = true
}

const list = document.getElementById('list')
list.addEventListener('click', (event) => {
    let element = event.target
    const complete = event.target.attributes.job.value
    if (complete === 'complete'){
        completeToDo(element)
    }
    if (complete === 'delete'){
        removeElement(element)
    }
    localStorage.setItem("ToDo", JSON.stringify(listArray))
})

const clear = document.querySelector('.fa-refresh')

clear.addEventListener('click', () => {
    localStorage.clear()
    location.reload()
})
