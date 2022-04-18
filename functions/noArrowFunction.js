class Person {
    constructor(firstName, lastName){
        this.firstName = firstName
        this.lastName = lastName
    }
}

// Previously this first Method didn't work.
// Currently it works with Arrow Function
Person.prototype.fullName = () => {
    console.log(this)
    return `fullName: ${this.firstName} ${this.lastName}`
}
// this second one also works correctly
Person.prototype.fullName = function(){
    console.log(this)
    return `fullName: ${this.firstName} ${this.lastName}`
}

const person1 = new Person('Morris', 'Otieno')
const person2 = new Person('Morys0', 'Oduor')
