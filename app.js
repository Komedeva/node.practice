const fs = require("fs");
const express = require('express');

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// const userRouter = require('./routes/user.router');

// app.use('/users', userRouter);

app.listen(5000, () => {
    console.log(`App listen 5000`)
});

const boys = require('./dataBaseBoys/boys.json');
const girls = require('./dataBaseGirls/girls.json');

fs.


//
// boys.forEach(data => {
//     if (gender === male)
//     {
//         fs.rename(`${__dirname}/dataBaseGirls/girls.json`, `${__dirname}/dataBaseBoys/boys.json`, err => {
//             if (err) {
//                 console.log(err);
//                 console.log('*********************');
//                 console.log(__dirname);
//                 console.log('*********************');
//             }
//         })
//     }
// ) else{
//         (gender === {gender:female === true} =>
//         {
//             fs.rename(`${__dirname}/dataBaseBoys/boys.json`, `${__dirname}/dataBaseGirls/girls.json`, err => {
//                 if (err) {
//                     console.log(err);
//                     console.log('*********************');
//                     console.log(__dirname);
//                     console.log('*********************');
//                 }
//             })
//         },
//     )
//     }
// });
//
//
// girls.forEach(data => {
//     if (gender === {gender:male === true} =>
//     {
//         fs.rename(`${__dirname}/dataBaseGirls/girls.json`, `${__dirname}/dataBaseBoys/boys.json`, err => {
//             if (err) {
//                 console.log(err);
//                 console.log('*********************');
//                 console.log(__dirname);
//                 console.log('*********************');
//             }
//         })
//     }
// ) else{
//         (gender === {gender:female === true} =>
//         {
//             fs.rename(`${__dirname}/dataBaseBoys/boys.json`, `${__dirname}/dataBaseGirls/girls.json`, err => {
//                 if (err) {
//                     console.log(err);
//                     console.log('*********************');
//                     console.log(__dirname);
//                     console.log('*********************');
//                 }
//             })
//         },
//     )
//     }
// })