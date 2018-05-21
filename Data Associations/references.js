var mongoose = require('mongoose');

mongoose.connect("mongodb://localhost/blog_demo_2");

var post = require('./models/post');
var user = require('./models/user.js');

// User.create({
//     email: "bob@gmail.com",
//     name: "Bobby Mueller"
// });

Post.create({
    title: "How to Cook the Best NothingBurger - Part 2: Now With More Nothing!",
    content: "Yummy"
}, function(err,post) {
    User.findOne({email:"bob@gmail.com"}, function(err, foundUser) {
        if(err) {
            console.log(err);
        }
        else {
            foundUser.posts.push(post);
            foundUser.save(function(err, data) {
                if(err) {
                    console.log(err);
                }
                else {
                    console.log(data);
                }
            });
        }
    });
});

// User.findOne({email: "bob@gmail.com"}).populate("posts").exec(function(err, user) {
//     if(err) {
//         console.log(err);
//     }
//     else {
//         console.log(user);
//     }
// });