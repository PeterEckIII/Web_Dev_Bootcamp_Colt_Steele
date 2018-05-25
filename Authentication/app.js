var express                 = require('express'),
    mongoose                = require('mongoose'),
    passport                = require('passport'),
    bodyParser              = require('body-parser'),
    localStrategy           = require('passport-local'),
    passportLocalMongoose   = require('passport-local-mongoose'),
    User                    = require('./models/user');

mongoose.connect("mongodb://localhost/auth_app");

var app = express();
app.set('view engine', 'ejs');

// ===================================
//   In-line require statement in an 
// app.use method to setup the session
// ===================================
app.use(require('express-session')({
    secret: "Rooney is a cute spaz!",
    resave: false,
    saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());

// ===========================================================
// Serialize: reading session, taking data and encoding it 
// Deserialize: reading session, taking data and unencoding it
// ===========================================================
passport.use(new localStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use(bodyParser.urlencoded({extended: true}));

// ===================
//     MIDDLEWARE:
//  Determines if user
//    is loggin in
// ===================
function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) {
        return next();
    }
    res.redirect("/login")
};

// =============
//    ROUTES
// =============

app.get("/", function(req, res) {
    res.render("home");
});

app.get("/secret", isLoggedIn, function(req, res) {
    res.render("secret");
});

// ================
//   AUTH ROUTES
// ================

app.get("/register", function(req, res) {
    res.render('register');
});

app.post("/register", function(req, res) {
    req.body.username
    req.body.password

    // Only using username because we don't want to save the password to the database
    // Instead, we pass the password in as the second argument on User.register.
    // From here, the User.register function hashes the password (turns it into
    // a long string of hexadecimal characters) and saves the hashed password to DB
    User.register(new User({username: req.body.username}), req.body.password, function(err, user) {
        if(err) {
            console.log(err);
            return res.render("register");
        }
        passport.authenticate("local")(req, res, function() {
            res.redirect("/secret");
        });
    });
});

app.get("/login", function(req, res) {
    res.render("login");
});

// Middelware takes the username, looks up the hashed password in the database
// and determines whether they match, which launches the successRedirect or
// failureRedirect object to determine where to send the user

app.post("/login", passport.authenticate("local", {
    successRedirect: "/secret",
    failureRedirect: "/login"    
}), function(req, res) {

});

app.get("/logout", function(req, res) {
    // Does not make any transaction with the database
    // Just destroys the session data
    req.logout();
    res.redirect("/");
});


app.listen("3000", function() {
    console.log("Authenticating........");
});

