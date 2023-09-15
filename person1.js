class Person {
    constructor(name, age, gender) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }

    greeting() {
        console.log(`My name is ${this.name} and I am ${this.age} and I am ${this.gender}`);
    }
}

console.log(__dirname, __filename);

// let XYZ = new Person("JackieChan", 50, 'Male');
// XYZ.greeting();
// console.log( XYZ.name);

module.exports = Person;