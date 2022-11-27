let firstCard = randomCard()
let secondCard = randomCard()
let cards= [firstCard, secondCard]
let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = true
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl= document.getElementById("sum-el")
let listCards = document.getElementById("cards-el")

let firstCardDealer = randomCard()
let secondCardDealer = randomCard()
let thirdCardDealer = randomCard()
let cardsDealer= [firstCardDealer, secondCardDealer, thirdCardDealer]
let sumDealer = firstCardDealer + secondCardDealer + thirdCardDealer
let sumElDealer= document.getElementById("sum-el-dealer")
let listCardsDealer= document.getElementById("cards-el-dealer")


function randomCard(){
    return Math.floor(Math.random()*10) + 1
}

function startGame() {
    renderGame()
}


function renderGame() {
    listCards.textContent = " Your cards: " 
    for (let i = 0; i < cards.length; i++) {
        listCards.textContent += cards[i] + " "
    }
    if( sum < 21){
        message = "Wanna draw a card ?"
    } else if (sum === 21){
        message = "Yoo BlackJack !!!"
        hasBlackJack = true
    } else{
        message= "Let's check !?"
        isAlive = false
    }
    messageEl.textContent = message
    sumEl.textContent = "Your total: " + sum
    moneyEl.textContent = "Money: " + startUp + " $"
    
}

function newCard() {
    if(isAlive === true && hasBlackJack === false && cards.length <= 4) {
        let card = randomCard()
        sum += card
        cards.push(card)
        renderGame()
        if(cards.length === 5 && sum <= 21){
            message = "WOW MAGIC FIVE @@"
            messageEl.textContent = message
           }
    }
}


function standCard() {
        listCardsDealer.textContent = "Cards: " 
    for (let a = 0; a < cardsDealer.length; a++) {
        listCardsDealer.textContent += cardsDealer[a] + " "}
    sumElDealer.textContent = "Total: " + sumDealer
    if (sum === sumDealer || sum > 21 && sumDealer < 16 || sum > 21 && sumDealer > 21){
            message = "~~~ Pushh ~~~"
        }
    else if( sum > sumDealer && sum < 21 || sumDealer > 21){
        message = "You are the winner"}
        else if (sum < sumDealer || sum > 21){
            message = "Loser!!!"
        }  else if(cards.length === 5 && sum <= 21){
            message = "WOW MAGIC FIVE @@"
        }
        messageEl.textContent = message    
}

