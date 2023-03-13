// const fs = require('fs')

// fs.readFile('./test.txt', 'utf8',(err, data) => {
//     console.log(data);
// })

// fs.writeFile('./hello.txt', 'Hi from js file',(err) => {
//     if(err){
//         console.log(err);
//     }else {
//         console.log('Success');
//     }
// })

// const fs = require('fs')

// console.log('Hello');
// let data = fs.readFileSync('./test.txt', 'utf8')
// console.log(data);
// console.log('barev');

// const fs = require('fs');

// console.log(1);
// fs.writeFileSync('barev.html', '<h1>Hello world!</h1>')
// console.log(2);

// const fs = require("fs")

// fs.appendFileSync("test.txt", "Hello mi mi mi!");

// fs.appendFile("test.txt", "Hello MID!", function(error) {
//     if (error) console.log(error);
                                                                            //   avelacnum e text
//     console.log("Запись файла завершена Содержимое файла");
//     let data = fs.readFileSync("test.txt", "utf8");
//     console.log(data);
// });

// const fs = require('fs')
// fs.mkdir ('./files', () => {});   stexcum e file
// fs.mkdirSync("./files");

// const fs = require('fs')

// if (fs.existsSync("./files/test2.txt")) {        stugum e ays chanaparhov file ka te voch
//     console.log(true);
// } else{
//     console.log(false);
// }

if (fs.existsSync("./files/x.txt") == true) {
    fs.unlinkSync('./files/x.txt')
}else {
    fs.writeFileSync('./files/x.txt', 'hello world!')
}
