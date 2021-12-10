// const x = require('./file/user');
//
// x.createUser('Katya','20')
//
// console.log('****************');
// console.log(__dirname);
// console.log(__filename);
// console.log('****************');
//

const fs = require('fs');
const path = require('path');

// let s = path.join(__dirname, 'file', 'user.js');
// console.log(s);
//
//
// const filePath = __dirname + '/file/file1.txt'
// const namePath = __dirname + '/file'
//
// fs.writeFile(filePath, 'Hello world', err => {
//     if (err){
//         console.log(err);
//     }
// })
//створити файл
//
// fs.appendFile(filePath, 'hello \n', err => {
//     if (err) {
//         console.log(err);
//     }
// })
//додати інфу

// fs.mkdir(`${__dirname}/netflix/film/lava`, { recursive:true }, err => {
//     if (err){
//         console.log(err);
//     }
// })
//створити директорію


// fs.rmdir(`${__dirname}/netflix/film/lava`, { recursive: true }, err => {
//     if (err){
//         console.log(err);
//     }
// })
//видалення


// fs.readdir(namePath, (err, files) =>{
//     if (err){
//         console.log(err)
//     }
//     console.log(files);
// } )
//прочитала що всередині

// file.forEach(value=>{
//     fs.stat(namePath+ `/${value}`, (err1, stats) => {
//         console.log(8888888888);
//         console.log(stats);
//         console.log(8888888888);
//
//     })
// })

// fs.unlink(filePath, err=>{
//     if (err){
//         console.log(err);
//     }
// })
//стерти


// fs.rename(`${__dirname}/file/file1.txt`, `${__dirname}/netflix/film/okten.txt`, err => {
//     if (err){
//         console.log(err);
//         console.log('*********************');
//         console.log(__dirname);
//         console.log('*********************');
//     }
// })


// const readStream = fs.createReadStream(filePath);
// const writeStream = fs.createWriteStream(filePath);
//
// readStream.on("data",chunk =>{
//     console.log(chunk);
// })
//
// readStream.on("end", ()=>{
//     console.log('jxscjskic')
// })
//
// for (let i = 0; i < 1000; i++) {
//     writeStream.write('HELLO WORLD')
// }
