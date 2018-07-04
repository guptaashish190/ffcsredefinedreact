const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20');
const keys = require('./keysecrets');
const User = require('../models/user.model');


// passport.serializeUser((user, done) =>{
//     done(null,user.id);
// });

// passport.deserializeUser((userid, done) =>{
//     User.findById(userid).then(user => {
//         done(null,user);
//     });
// });

passport.use(new GoogleStrategy(
    {
        callbackURL: '/auth/google/redirect',
        clientID : keys.googleAPI.ID,
        clientSecret: keys.googleAPI.secret
    },
    (accessToken, refreshToken, profile, done) =>{  
        
        User.findOne({googleID: profile.id}, (err,user) => {
            if(user){
                done(null, user);
            }else{
                new User({
                    googleID: profile.id,
                    displayName: profile.displayName,
                }).save().then( newUser => {
                    done(null, newUser);
                });
            }
        });
    }
));