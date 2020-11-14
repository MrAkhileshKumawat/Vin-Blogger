const passport = require("passport")
// const googleUser = require("../lib/model/google")
const GoogleStrategy = require('passport-google-oauth20').Strategy;


exports.googleAuth = (passport)=>{
    const {GOOGLE_CLIENT_ID,GOOGLE_CLIENT_SECRET,GOOGLE_CALLBACK_URL}=process.env

       
    passport.serializeUser(function(user, done) {
        done(null, user);
    });

    passport.deserializeUser(function(obj,done){
        done(null,obj)
    })

    passport.use(new GoogleStrategy({
        clientID: GOOGLE_CLIENT_ID,
        clientSecret: GOOGLE_CLIENT_SECRET,
        callbackURL: GOOGLE_CALLBACK_URL
      },
      function(accessToken, refreshToken, profile, cb) {
          const user={
            google_id:profile.id,
            name:profile.displayName,
            email:profile._json.email,
            provider:profile.provider,
            profile_picture:profile._json.picture
        }
        cb(null, user)
      }
    ));
}
