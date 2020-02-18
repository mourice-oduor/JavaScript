function printReverse(arr){
    for(var i = arr.length - 1; i >= 0; i--){
        console.log(arr[i])
    }
}
printReverse([3,6,2,5])

//isUniform function
///checks if the inputed array is uniform
function isUniform(arr){
    var first = arr[0]
    for(var i = 1; i < arr.length; i++){
        if(arr[i] !== first){
            return false
        }
    }
    return true
}

//sumArray
//returns the sum of all numbers in the Array
function sumArray(arr){
    var total = 0
    arr.forEach(element => {
        total += element   
    })
    return total
}

//function max()
//returns the maximum number in the array
function max(arr){
    var max = arr[0]
    for(var i = 1; i < arr.length; i++){
        if(arr[i] > max){
            max = arr[i]
        }
    }
    return max
}