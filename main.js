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

function enterKey() {
    document.querySelector('input').addEventListener('keydown', function(e) {
        if (e.KeyCode === 13) {
            console.log('13')
        }
    })
}
enterKey()