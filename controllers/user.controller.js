const db = require('../dataBase/users');
const help = require('../helper/helper');

module.exports = {
    getUser: (req, res)=>{
        res.json(db);
        help();
    },

    // getUserById:(req, res)=>{
    //     const { user_id } = req.params;
    //
    //     const user = db[user_id - 1];
    //
    //     res.json({ user });
    // },

    createUser: (req, res)=>{
        console.log(req.body);

        db.push({...req.body, id: db.length + 1});
        res.json(db);
        help();
    },

    deleteUser: (req, res)=>{
        res.json('DELETE USER');
        help();
    }
}