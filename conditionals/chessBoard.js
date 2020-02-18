const size = 8

const board = " "

for (const y = 0; y < size; y++) {
    for (const x = 0; x < size; x++) {
        if ((x + y) % 2 == 0) {
            board += " "
        } else {
            board += "#"
        }
    }
    board += "\n"
}

console.log(board)