/*const answer = prompt('are we there yet?')

while (answer !== 'yes' && answer !== 'yeah') {
    const answer = prompt('are we there yet?')
}
alert('WOW, We made it!!! THANKS')*/

//  VERSION 2 USING INDEX OF
const answer = prompt('are we there yet?')

while (answer.indexOf('yes') === -1 ) {
    const answer = prompt('are we there yet?')
}
alert('WOW, We made it!!! THANKS')