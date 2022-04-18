const sanitize = (strings, ...values) => {
    const dirty = strings.reduce((prev, next, i) => `${prev} ${next} ${values[i] || ""}`, "")
    return DOMPurify.sanitize(dirty)
}

const aboutMe = `I am a fullstack developer and here's my pic 
<img src="https://images.unsplash.com/photo-1596005554384-d293674c91d7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8a2VueWF8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60" onload="alert('WRONG INPUT!!!');"/>`

const html = sanitize`
    <p>${aboutMe}</p>
`
const about = document.querySelector('.about')
about.innerHTML = html
