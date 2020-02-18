function factorial(num) {
    var result = 1
    for (var i = 2; i <= num; i++) {
        result *= i
    }
    return factorial(num)
}