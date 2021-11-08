
const express = require('express');
const app = express();
const passport = require("./configs/passport")
const session = require('express-session');
const cors = require('cors')


//---------------fb auth----------//
const fbpassport = require("./configs/fbpassport");

app.use(session({ secret: 'ilovescotchscotchyscotchscotch' }));
app.use(passport.initialize());

passport.serializeUser(function({user, token}, done) {
    done(null, {user, token});
});
  
passport.deserializeUser(function({user, token}, done) {
    done(null, {user, token});
});


app.get('/auth/facebook',
  passport.authenticate('facebook',{ scope : 'email,user_photos' }));

app.get('/auth/facebook/callback',
  passport.authenticate('facebook', { failureRedirect: '/login' }),
  function(req, res) {
   res.redirect('http://localhost:3000/blueaura');
  });
//----------------------------//

const {register, login} = require("./controllers/authController")


// app.use(cors()) 
app.use(cors({origin: 'http://localhost:3000', credentials: true}));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(
    session({
        secret: 'secretcode',
        resave: true,
        saveUninitialized: true,
    })
)

app.use(passport.initialize());
app.use(passport.session());

passport.serializeUser(function({user, token}, done) {
    done(null, {user, token});
});
  
passport.deserializeUser(function({user, token}, done) {
    done(null, {user, token});
});


app.get("/auth/google/failure", function(req, res) {
    return res.send("Something went wrong");
})


app.get('/auth/google',
  passport.authenticate('google', { scope:
      [ 'email', 'profile' ] }
));



app.get( '/auth/google/callback',
    passport.authenticate( 'google', {
        failureRedirect: '/auth/google/failure'
}), function(req, res) {
    res.redirect('http://localhost:3000/blueaura')
});


app.post("/register", register);
app.post("/login", login);

app.get('/profile', isLoggedIn,(req, res) => {
    res.send(req.user);
})

function isLoggedIn(req, res, next) {

    // if user is authenticated in the session, carry on
    if (req.isAuthenticated())
        return next();

    // if they aren't redirect them to the home page
    res.redirect('http://localhost:3000');
}


module.exports = app;