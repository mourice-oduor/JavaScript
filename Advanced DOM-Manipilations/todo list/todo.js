var lis = document.querySelectorAll('li')

for(var i = 0; i < lis.length; i++){
    lis[i].addEventListener('mouseover', () => {
        this.classList.add('selected')
    })
    lis[i].addEventListener('mouseout', () => {
        this.classList.remove('selected')
    })
    lis[i].addEventListener('click', () => {
        this.classList.toggle('done')
    })
}

/*firstLI.addEventListener('mouseover', () => {
    firstLI.style.color = 'green'
})
firstLI.addEventListener('mouseout', () => {
    firstLI.style.color = 'black'
})*/
