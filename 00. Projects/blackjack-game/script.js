let messageElement = document.getElementById('message-el')
let sumElement = document.querySelector('#sum-el')
let cardsElement = document.querySelector('#cards-el')

let firstCard = getRandomNumber()
let secondCard = getRandomNumber()
let sumCards = firstCard + secondCard
let hasBlackJack = false
let isAlive = false

let message = ""

let cards = [firstCard, secondCard]

let player = {
    name : "Abdallah",
    chips : 200
}

let playerElement = document.getElementById("player-el")
playerElement.textContent = player.name + ": $" + player.chips

function getRandomNumber() {
    let randomNumber = Math.floor(Math.random() * 13) + 1
    if (randomNumber > 10) {
        return 10
    } else if (randomNumber === 1){
        return 11
    } else{
        return randomNumber
    }
     
}

function renderGame(){
    cardsElement.textContent = "Cards: " 
    
    for (let index = 0; index < cards.length; index++) {
        cardsElement.textContent += cards[index] +" "
        
    }
    
    
    sumElement.textContent = "Sum: " + sumCards
    if (sumCards < 21) {
        message = "Do you want to drow a new card? 😐"
    }
    else if (sumCards === 21) {
        message = "Wohoo You've got Blackjack! 🥳"
        hasBlackJack = true
    }
    else {
        message = "You're out of the game! 🥹"
        isAlive = false
    }
    messageElement.textContent = message
}

function startGame() {
    isAlive = true
    renderGame()
}


function newCard() {
    if (isAlive == true && hasBlackJack == false) {
        let ThirdCard = getRandomNumber()
        cards.push(ThirdCard)
        sumCards += ThirdCard
        renderGame()
    }
}