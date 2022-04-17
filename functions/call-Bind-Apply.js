// First Case
var a=1, b=2

const add = ((c, d) => {
    console.log(this.a + this.b + c + d)
})
add(1,2)

// Second Case using ==>> call , bind and apply
var numberObj = {
    a: 1,
    b: 2
}
add.call(numberObj, 1, 2)
add.apply(numberObj, [1, 2])

const addBoundFunc = add.bind(numberObj)
addBoundFunc(1, 2)
