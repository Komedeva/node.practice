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

const filePath = __dirname + '/file/file1.txt'

fs.writeFile(filePath, 'Hello world', err => {
    if (err){
        console.log(err);
    }
})