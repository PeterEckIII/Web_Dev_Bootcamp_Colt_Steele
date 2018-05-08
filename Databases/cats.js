var mongoose = require('mongoose');
mongoose.connect("mongodb://localhost/cat_app");

var catSchema = new mongoose.Schema({
  name: String,
  age: Number,
  temperament: String
});

var Cat = mongoose.model("Cat", catSchema);

// Add ats to the database
// var george = new Cat({
//   name: "Mrs. Norris",
//   age: 7,
//   temperament: "Evil"
// });
//
// george.save(function(err, cat){
//   if(err) {
//     console.log("Something went wrong");
//   }
//   else {
//     console.log("We saved a new kitty to our records!");
//     console.log(cat);
//   }
// });



// Retrieve Cats from database

Cat.find({}, function(err, cats) {
  if(err) {
    console.log(err);
  }
  else {
    console.log("The Cats are: ");
    console.log(cats);
  }
});


// Make and save a cat at once
Cat.create({
  name: "Wendy",
  age: 9,
  temperament: "Bland"
}, function(err, cat) {
  if(err) {
    console.log(err);
  }
  else {
    console.log(cat);
  }
});
