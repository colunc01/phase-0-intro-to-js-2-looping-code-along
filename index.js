// Code your solutions in this file

// for loop assignment
function writeCards(cards, eventName){
    const cardLetters =[];
 
    for (let i=0;i<cards.length;i++){
        cardLetters[i] =`Thank you, ${cards[i]}, for the wonderful ${eventName} gift!`;
        console.log(`Thank you, ${cards[i]}, for the wonderful ${eventName} gift!`);
    }
    return cardLetters;
}

// while loop assignment
function countDown(number){
    let i = 0;
    while (i<number+1){
        console.log(number);
        number -= 1;
    }
}