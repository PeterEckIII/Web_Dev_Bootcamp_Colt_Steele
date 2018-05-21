var mongoose = require('mongoose');

mongoose.connect("mongodb://localhost/blog_demo_2");

// POST
var postSchema = new mongoose.Schema({
    title: String,
    content: String
});
var Post = mongoose.model("Post", postSchema);

// USER
var userSchema = new mongoose.Schema({
    email: String,
    name: String,
    posts: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Post"
        }
    ]
});
var User = mongoose.model("User", userSchema);

// User.create({
//     email: "bob@gmail.com",
//     name: "Bobby Mueller"
// });

// Post.create({
//     title: "How to Cook the Best NothingBurger - Part 2: Now With More Nothing!",
//     content: "Yummy"
// }, function(err,post) {
//     User.findOne({email:"bob@gmail.com"}, function(err, foundUser) {
//         if(err) {
//             console.log(err);
//         }
//         else {
//             foundUser.posts.push(post);
//             foundUser.save(function(err, data) {
//                 if(err) {
//                     console.log(err);
//                 }
//                 else {
//                     console.log(data);
//                 }
//             });
//         }
//     });
// });

User.findOne({email: "bob@gmail.com"}).populate("posts").exec(function(err, user) {
    if(err) {
        console.log(err);
    }
    else {
        console.log(user);
    }
});