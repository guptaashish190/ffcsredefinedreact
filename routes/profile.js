const router = require('express').Router();
const User = require('../models/user.model');
const JWT = require('jsonwebtoken');
const config = require('../config/keysecrets');

router.post('/new/validateUsername', (req,res) => {
    const { username } = req.body;
    User.findOne({username}, (err, user) => {
        if(user){
            res.json({valid: false});
        }else{
            res.json({valid: true});
        }
    });
});

router.post('/new/addUser' , (req,res) => {
    new User(req.body.userInfo).save().then((user) => {
        const token = JWT.sign(user.toJSON(), config.jwtSecret);
        res.send({
            token,
            status: "ok",
            error: null
        });
    }).catch((err)=>{
        res.send({
            status: "err",
            err
        })
    });
});

module.exports = router;