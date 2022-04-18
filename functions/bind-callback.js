var user = {
    firstName: 'Morris',
    lastName: 'Otieno',
    clickHandler: (event) => {
        console.log(this.firstName + " " + this.lastName);
        console.log(user.firstName + " " + user.lastName);
    }
}
$("button").click(user.clickHandler.bind(user));