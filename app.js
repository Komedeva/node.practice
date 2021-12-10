const fs = require("fs");
const express = require('express');
const {parse} = require("eslint-plugin-import/memo-parser");
const path = require('path');
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}));

const boys = path.join(process.cwd(), 'dataBaseBoys');
const girls = path.join(process.cwd(), 'dataBaseGirls');

fs.readdir(boys, (err, files) => {
    if (err) {
        console.log(err);
    }
    for (let file of files) {
        fs.readFile(path.join(boys, file), (err, data) => {
            const user = JSON.parse(data.toString());
            if (user.gender === 'female') {
                fs.rename(path.join(boys, file), path.join(girls, file), err1 => {
                    if (err1){
                    console.log(err1);
                    }
                })
            }

        })
    }
});

fs.readdir(girls, (err, files) => {
    if (err) {
        console.log(err);
    }
    for (let file of files) {
        fs.readFile(path.join(girls, file), (err, data) => {
            const user2 = JSON.parse(data.toString());
            if (user2.gender === 'male') {
                fs.rename(path.join(girls, file), path.join(boys, file), err1 => {
                    if (err1){
                    console.log(err1);
                    }
                })
            }

        })
    }
});