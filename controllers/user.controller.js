const db = require('../dataBase/users');

module.exports = {
    getUsers: (req, res)=>{
        res.json(db);
    },

    getUserById:(req, res)=>{
        const { user_id } = req.params;

        const user = db[user_id - 1];

        res.json({ user });
    },

    createUsers: (req, res)=>{
        console.log(req.body);

        db.push({...req.body, id: db.length + 1});

        res.json(db);
    },

    updateUsers: (req, res)=>{
        res.json('UPDATE USER');
    }
}