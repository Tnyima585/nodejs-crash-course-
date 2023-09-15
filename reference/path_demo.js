let path = require('path');

// Base File name
console.log(path.basename(__filename));

console.log(__filename);
// Dir name
console.log(path.dirname(__filename));
// file extension
console.log(path.extname(__filename)); 
// Create path object
console.log(path.parse(__filename).base);