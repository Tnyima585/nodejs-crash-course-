console.log("1");

setTimeout(() => {
   let x = 5; let y = 5;
   const z = x + y;
   console.log(z);
}
, 5000)
console.log("3");

const names = ['james', 'jess', 'lily', 'sevy']

//names.forEach(() => (
//console.log("Tenzin Nyima")) )

const myForEach = (arr, cb) => {
    for(let i = 0, i < arr.length, i++) {
        const element = arr[i]
        cb(element)
    }
}
myForEach(names, (name) => {
    console.log(name);
})

module.exports = setTimeout