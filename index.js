// console.log('Hello from Node.js....');

// const person = require('./person');
// console.log(person);
// console.log(person.name);

const Person = require('./person1');
const user = require('./arrow_this')
const cup = require("./callBack")
const Person1 = new Person('Jhampa Chomphel', 30, 'male');
const person2 = new Person("TenTsering", 33, 'female');

Person1.greeting();
console.log(Person1.age);
person2.greeting();
 console.log( person2.gender);     
 
console.log(__dirname, __filename);

console.log(user.price)
user.welcomeMessage()
user.username = "Suraj"
user.welcomeMessage()

console.log(cup);