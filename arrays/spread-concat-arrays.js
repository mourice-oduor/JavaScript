let persons = []

const managers = ['Morris', 'Jones', 'Paul', 'Sam', 'Ann']
const developers = ['Net', 'Ninja', 'John', 'Alvo', 'Brayo']

// managers.push('Kevoski')
persons = [...managers, ...developers]
console.log(persons)
// persons = persons.concat(managers)
// persons = persons.concat(developers)
// persons.push('Kevoski')
// console.log(persons)

// copy array
// const copiedPersons = persons
const copiedPersons = [...persons]
console.log(copiedPersons)
