const numbers = [1, 2, 4]

const results = numbers.map(function(number) {
    return number * 2
})

const results2 = numbers.map((number) => {
    return number * 2
})

const results3 = numbers.map(number => number * 2 )

console.log(results3)