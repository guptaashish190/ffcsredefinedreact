const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20');
const FacebookStrategy = require('passport-facebook').Strategy;
const LocalStrategy = require('passport-local');
const bcrypt = require('bcrypt');
const keys = require('./keysecrets');
const User = require('../models/user.model');
const JWT = require('jsonwebtoken');
const secrets = require('./keysecrets');
//Local Strategy
passport.use(new LocalStrategy({
}, (username, password, done) => {
    User.findOne({username}).then((user) => {
        bcrypt.compare(password, user.password, (err, valid) => {
            console.log(valid);
            if(valid){
                done(null, {
                    token: JWT.sign(user.toJSON(), secrets.jwtSecret),
                });
            }else{
                done(null, {
                    token: null,
                });
            }   
        })
    }).catch(() => {
        done(null, {
            user: null,
            err: 'User not found'
        });
    });

}));

// Facebook Strategy
passport.use(new FacebookStrategy(
    {
        clientID: keys.facebookAPI.ID,
        clientSecret: keys.facebookAPI.secret,
        callbackURL: '/auth/facebook/redirect',
        profileFields: ['id', 'displayName', 'photos', 'email']
    },
    (accessToken, refreshToken, profile, done) => {
        User.findOne({userID: profile.id}, (err,user) => {

            if(user){
                done(null, {
                    newUser: false,
                    user: user
                });
            }else{
                const newUser = {
                    userID: profile.id,
                    displayName: profile.displayName,
                    email: profile.emails.value,
                    photoURL: profile.photos[0].value
                };
                done(null, {
                    newUser: true,
                    user: newUser
                });
            }
        });
    }
));

passport.use(new GoogleStrategy(
    {
        callbackURL: '/auth/google/redirect',
        clientID : keys.googleAPI.ID,
        clientSecret: keys.googleAPI.secret
    },
    (accessToken, refreshToken, profile, done) =>{
        User.findOne({userID: profile.id}, (err,user) => {
            if(user){
                done(null, {
                    newUser: false,
                    user: user
                });
            }else{
                const newUser = {
                    userID: profile.id,
                    displayName: profile.displayName,
                    email: profile.emails.value,
                    photoURL: profile.photos[0].value
                };
                done(null, {
                    newUser: true,
                    user: newUser
                });
            }
        });
    }
));