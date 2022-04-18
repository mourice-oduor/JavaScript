const highlight = (strings, ...values) => {
    // debugger;
    let str = ""
    strings.forEach((string, i) => {
        str += `${string} <span>${(values[i] || "")}</span>`
    });
    return str
}
const firstName = 'Morris'
const lastName = 'Otieno'
const mobile = '0712345678'
const email = 'morris2022@gmail.com'
const greetMsg = highlight`Welcome to Modern Javascript -Es6 and Es7 ${firstName} ${lastName}
Contact: ${mobile}.
You will receive email for ${email} shortly.`

document.body.innerHTML = greetMsg