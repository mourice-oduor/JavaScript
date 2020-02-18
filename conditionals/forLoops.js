console.log('print all nums btwn -10 && 19')
for (var i = -10; i < 20; i += 1) {
    console.log(i)
}

console.log('print all even nums btwn 10 && 40')
//for (var i = 10; i <= 40; i += 2)
//console.log(i)
for(var i =10; i<=40; i += 1) {
    if (i % 2 === 0) {
        console.log(i)
    }
}

console.log('print all odd nums btwn 300 && 333')
for (var i = 300; i <= 333; i++) {
    console.log(i)
}

console.log('print all numbers betwwen 5 && 50 && are divisible by 3 && 5')
for (var i = 5; i <= 50; i++)
if (i % 5 === 0 && i % 3 === 0) {
    console.log(i)
}