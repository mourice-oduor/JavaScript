const secretNumber = 4

const stringGuess = prompt('Guess a number')
const guess = Number(stringGuess)

if (guess === secretNumber) {
    alert('You Got It Right!')
}
else if (guess > secretNumber) {
    alert('Number Too High.  Guess again!')
}
else{
    alert('Number Too Low.   Guess again!')
}