const express = require('express');
const passport = require("./configs/passport")
const session = require('express-session');
const {register, login} = require("./controllers/authController")

const cors = require('cors')

const app = express();

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
    // const {user, token} = req.user
    // return res.status(200).json({user, token });
    res.redirect('http://localhost:3000/blueaura')
});



app.post("/register", register);
app.post("/login", login);

app.get('/getuser', (req, res) => {
    res.send(req.user);
})


module.exports = app;