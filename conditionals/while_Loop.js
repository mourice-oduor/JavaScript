console.log('print all nums btwn -10 && 19')
var counter = -10

while (counter < 20) {
    console.log(counter)
    counter++
}

console.log('print all even nums btwn 10 && 40')
var counter = 10

while (counter <= 40) {
    if (counter % 2 === 0) {
        console.log(counter)
    }
    counter+=1
}

console.log('print all odd nums btwn 300 && 333')
var counter = 300

while (counter <= 333) {
    if (counter % 2 !== 0) {
        console.log(counter)
    }
    counter += 1
}

console.log('print all nums divisible by 5 && 3 btwn 5 && 50')
var counter = 5

while (counter <= 50) {
    if (counter % 5 == 0 && counter % 3 == 0) {
        console.log(counter)
    }
    counter += 1
}