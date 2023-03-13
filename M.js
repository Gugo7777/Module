// let x = require('./F')

// console.log(x);

// let greeting1 = require("./Greeting.js");
// console.log(`Hello ${greeting1.name}`);

// let greeting2 = require("./Greeting")
// greeting2.name = "Bob";

// console.log(`Hello ${greeting2.name}`);
// console.log(`Hello ${greeting1.name}`);

// const { v4 } = require('uuid');
// console.log(v4());
// console.log(v4());
// console.log(v4());

const path = require('path')

// console.log(__filename, '---', path.basename(__filename));
// console.log(__dirname, '---', path.basename(__dirname));

// console.log(__filename, '---', path.extname(__filename));
// console.log(__dirname, '---', path.extname(__dirname));

// console.log(path.dirname(__filename));
// console.log(path.dirname(__dirname));

let parse = path.parse(__dirname);
// console.log(parse);
console.log(path.format(parse));

