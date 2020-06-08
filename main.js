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
(function enterKey() {
    document.querySelector('input').addEventListener('keydown', function(e) {
        if (e.keyCode === 13) {
            let inputOut = this.value
            plusList(inputOut)
        }
    })
})()
function plusList(n) {
    let text = '<li class="block"> <i class="fa fa-circle-thin" aria-hidden="true"></i><p class="text">'+n+'</p><i class="fa fa-trash" aria-hidden="true"></i></li>'
    const list = document.getElementById('list')
    list.insertAdjacentHTML('beforeend', text)
    document.querySelector('input').value = ''
    }