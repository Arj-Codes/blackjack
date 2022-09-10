// javascript
let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""
let messageEl=document.getElementById("message-el")
let sumEl=document.getElementById("sum-el")
let cardsEl=document.getElementById("cards-el")

let player = {
    name : "Arjun",
    chips : 145
}
document.querySelector("#player-el").textContent = player.name + " : $"+player.chips

function getRandomCard(){
let rN = Math.floor(Math.random()*13)+1
if(rN===1){
    return 11
}
else if(rN>=11 && rN <=13){
    return 10    
}
else{
    return rN
}  
}

function startGame(){
    let fc = getRandomCard()
    let sc = getRandomCard()
    cards = [fc,sc]
    sum = fc+sc
    isAlive=true
    renderGame()    
}

function newCard(){
    if(isAlive==true && hasBlackJack==false){
        let card = getRandomCard()
        cardsEl.textContent+=" "+cards.push(card);//push operating pushes a card into the array
        //pop removes the last element
        sum+=card;
        renderGame()            
    }
}


function renderGame(){
cardsEl.textContent = "Cards : "
for(let i=0;i<cards.length;i++){
cardsEl.textContent += cards[i]+" "    
}
sumEl.textContent = "Sum : "+sum
    if(sum<=20){
        message="Do you want to draw a new card?"
    }
    else if(sum===21)
    {
        message="BlackJack!!"    
        hasBlackJack=true
    }
    else{
        message="Better luck next time!"
        isAlive = false
    }
    messageEl.textContent = message
    // console.log(count)
    // console.log(c2) 
}
 
// else if(sum==="21")
// {
//     console.log("BlackJack!!")    
// } //wont work
// else if(sum=="21")
// {
//     console.log("BlackJack!!")    
// } //will work
