console.log(sum(range(1, 10)))
//Write a range function that takes two arguments, start and end , and returns
//an array containing all the numbers from start up to(and including) end
function range(start, end, step = start < end ? 1 : -1) {
    let array = []

    if (step > 0) {
        for (let i = start; i <= end; i += step) array.push(i)
    } else {
        for (let i = start; i >= end; i += step) array.push(i)
    }
    return array
}


//write a sum function that takes an array of numbers and returns the
//sum of these numbers.Run the example program and see whether it does
//indeed return 55
function sum(array) {
    let total = 0
    for (let value of array) {
        total += value
    }
    return total
}
