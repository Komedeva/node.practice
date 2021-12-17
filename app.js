const express = require('express');
const expressHbs = require('express-handlebars');
const path = require('path');

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use(express.static(path.join(__dirname, 'static')));


app.set('view engine', '.hbs');
// який двигун використовувати, куди ходити
app.engine('.hbs', expressHbs.engine({
    defaultLayout: false
}));
// що використовувати коли зустрінуться такі налаштування
app.set('views', path.join(__dirname, 'static'));
// вказую де views лежать
const users = [];

app.get('/login', (req, res) => {
    res.render('login');
});

app.post('/login', (req, res) => {
   users.push(req.body);
    res.json('USER REGISTERED')
});

// app.get('/katya', (req, res) => {
    // res.send('WORLD')
    // res.write('WORLD');
    // res.end();
// });

// app.get('/users', (req, res) => {
//     res.json([
//         {id: 1, name: 'Dima', age: 51},
//         {id: 2, name: 'Katya', age: 41},
//         {id: 3, name: 'Dima', age: 31},
//         {id: 4, name: 'Olya', age: 21},
//         {id: 5, name: 'Max', age: 11}
//     ])
// });

app.listen(5000 , () => {
    console.log('App listen 5000');
})