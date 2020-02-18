const age = prompt("How old are you? ...... please enter your age: ")
// If age is negative  
if (age < 0) {
    console.log("Come back once you're out of the womb")
}
// If age is 21 
if (age === 21) {
    console.log("Happy 21st Birthday!")
}
// If age is odd  
//(not evenly divisible by two)  
if (age % 2 !== 0) {
    console.log("Your age is odd!")
}
//OR use this one
/* else if ((age % 2) === 1) {
    console.log("Your age is odd!") */

//If age is perfect square
else if (age % Math.sqrt(age) === 0) {
    console.log("Perfect sqaure!")
}
else {
    console.log("Wow! you are " + age + " years old!")
}