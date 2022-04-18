let admin = 'Morris'
let supperAdmin = 'Net-Ninja'

// console.log(admin)
// console.log(supperAdmin)

//Method 1
// var tmp = admin
// admin = supperAdmin
// supperAdmin = tmp

// console.log(admin)
// console.log(supperAdmin)

// method 2
[supperAdmin, admin] = [admin, supperAdmin]
console.log(admin)
console.log(supperAdmin)