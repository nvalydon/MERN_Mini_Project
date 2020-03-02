const User = require('./models/users');
const passport = require('passport');
const JWTStrategy = require('passport-jwt').Strategy;
const ExtractJWT = require('passport-jwt').ExtractJwt;
const { jwt: { secret } } = require('./config/config.json')

passport.use(User.createStrategy());

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

const opts = {
    secretOrKey: secret,
    jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken()
}

passport.use(new JWTStrategy(opts, (jwtPayload, done) => {
    User.findById(jwtPayload.id)
        .then(user => {
            if (user) {
                done(null, user);
            }
            else {
                done(null, false, {message: 'user not found'});
            }
        }).catch(err => {
            done(err);
        })
}))



module.exports = passport;