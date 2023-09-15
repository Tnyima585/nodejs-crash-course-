const user = {
    username: 'Hitesh',
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username}, welcome to website!!`)
    }

}

module.exports = user;

// user.welcomeMessage()
// user.username = 'Sam'
// user.welcomeMessage()
// user.price = 1000
// console.log(user);