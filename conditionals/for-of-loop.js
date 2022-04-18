const friends = ['Morris', 'Jonte', 'Jones', 'Alvo', 'Katrina']

for(const f of friends){
    if(f == 'Jonte'){
        // break
        continue
    }
    console.log(f)
}

// USE CASES
// Case 1
for(const [key,value] of friends.entries()){
    console.log(`key: ${key} value: ${value}`)
}

// case 2 >> sum
function sum() {
    let total = 0
    for (let n of arguments){
        total += n
    }
    console.log(total)
}
sum(3, 5, 15, 23, 33, 42, 55)

// case 3 
const greetMsg = 'Welcome to Modern Javascript =>Es6'
for (const ch of greetMsg){
    console.log(ch)
}

// case 4 
const spanList = document.querySelectorAll('span')
for (const span of spanList) {
    span.addEventListener('click', () => 
    console.log("Welcome to Modern Javascript"))
} 