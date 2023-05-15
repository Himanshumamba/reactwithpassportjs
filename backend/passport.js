const passport = require('passport');

const GoogleStrategy = require('passport-google-oauth20').Strategy;

const GithubStrategy = require('passport-github2').Strategy;

const GOOGLE_CLIENT_ID="214776356283-b0d52npgpjkdr2fpf99jt71hdsmt9ucv.apps.googleusercontent.com"
const GOOGLE_CLIENT_SECRETKEY="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"
const GITHUB_CLIENT_ID="325b5e22cefd6bd12c5b"
const GITHUB_CLIENT_SECRETKEY="136b16671cb82ae7073a886436c01c311930031b"

passport.use(new GithubStrategy({
  clientID: GITHUB_CLIENT_ID,
  clientSecret: GITHUB_CLIENT_SECRETKEY,
  callbackURL: "http://localhost:5000/auth/github/callback"
},
function(accessToken, refreshToken, profile,done) {
    done(null,profile);


}

));


passport.use(new GoogleStrategy({
    clientID: GOOGLE_CLIENT_ID,
    clientSecret: GOOGLE_CLIENT_SECRETKEY,
    callbackURL: "http://localhost:5000/auth/google/callback"
  },
  function(accessToken, refreshToken, profile,done) {
    done(null,profile);
  }
 
));
passport.serializeUser((user,done)=>{

     done(null,profile)
})

passport.deserializeUser((user,done)=>{

    done(null,profile)
})

