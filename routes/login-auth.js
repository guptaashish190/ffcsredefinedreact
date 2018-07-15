const router = require('express').Router();
const passport = require('passport');
const JWT = require('jsonwebtoken');
const config = require('../config/keysecrets');
// Passport Config
require('../config/passport');

// Local Auth
router.post('/local', passport.authenticate('local', {
    session: false,
}), (req, res) => {
    console.log(req.user);
});

// Google Authentication
router.get('/google',passport.authenticate('google',{
    scope: ['profile', 'email'],
    prompt : "select_account" 
}));

// Google Auth Callback
router.get('/google/redirect',passport.authenticate('google',{session: false}), (req,res) => {
    let token = '';
    if(req.user.newUser){
        const data = {
            user: req.user.user,
            newUser: req.user.newUser
        };
        token = JWT.sign(data, config.jwtSecret);
    }else{
        token = JWT.sign(req.user.user.toJSON(), config.jwtSecret);
    }
    res.redirect("http://localhost:8080/redirect/?token=" + token); 
});


// Facebook Authentication
router.get('/facebook', passport.authenticate('facebook',{
    scope: ['email']
}));

router.get('/facebook/redirect', passport.authenticate('facebook',{session: false}), (req, res) => {
    let token = '';
    if(req.user.newUser){
        const data = {
            user: req.user.user,
            newUser: req.user.newUser
        };
        token = JWT.sign(data, config.jwtSecret);
    }else{
        token = JWT.sign(req.user.user.toJSON(), config.jwtSecret);
    }
    res.redirect("http://localhost:8080/redirect/?token=" + token); 
});

router.get('/verifyToken', (req,res) => {
    const token = req.headers.authorization.split(" ")[1];
    JWT.verify(token,config.jwtSecret, (err,user) => {
        if(err) return res.status(401).send({err})
        res.json({user});
    });
});

module.exports = router;
