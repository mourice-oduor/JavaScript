function power(base, exponent) {
    if (exponent == 0) {
        return 1
    } else {
        return base * power(base, exponent - 1)
    }
}
console.log(power(2, 3))

//Recursive function that, given a number, tries to find a sequence of
//additions and multiplications that produces that number
//by starting from the number 1 and repeatedly either
//adding 5 or multiplying by 3 in order to get such a number
function findSolution(target) {
    function find(current, history) {
        if (current == target) {
            return history
        } else if (current > target) {
            return null
        } else {
            return find(current + 5, `(${history} + 5)`) ||
                find(current * 3, `(${history} * 3)`);
        }
    }
    return find(1, "1")
}
console.log(findSolution(24))

//Recursion for EVEN OR ODD Number
//And For any other number N, its evenness is the same as N - 2
function isEven(n) {
    if (n == 0)
        return true
    else if (n == 1)
        return false
    else if (n < 0)
        return isEven(-n)
    else
        return isEven(n - 2)
}


console.log(isEven(50))
console.log(isEven(75))
console.log(isEven(-1))