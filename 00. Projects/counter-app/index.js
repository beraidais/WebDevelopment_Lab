let countElement = document.getElementById("count-el")
let saveElement = document.getElementById("save-el")
let count = 0

let message = countElement

function increment() {
    count += 1
    countElement.textContent = count
}

function save() {
    saveElement.textContent += count
    saveElement.textContent += " - "
    count = 0
    countElement.textContent = count
}

let username = "Abdallah"
let notificationsCount = "You have three notifications"


