const router = require('express').Router();
const passport = require('passport');
const JWT = require('jsonwebtoken');
const config = require('../config/keysecrets');
// Passport Config
require('../config/passport');

// Google Authentication
router.get('/google',passport.authenticate('google',{
    scope: ['profile'],
    prompt : "select_account" 
}));

// Google Auth Callback
router.get('/google/redirect',passport.authenticate('google',{session: false}), (req,res) => {
    const token = JWT.sign(req.user.toJSON(), config.jwtSecret);
    res.redirect("http://localhost:8080/redirect/?token=" + token);
});


// Facebook Authentication
router.get('/facebook', passport.authenticate('facebook'));

router.get('/facebook/redirect', passport.authenticate('facebook',{session: false}), (req, res) => {
    const token = JWT.sign(req.user.toJSON(), config.jwtSecret);
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