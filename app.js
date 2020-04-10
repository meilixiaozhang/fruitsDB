//jshint esversion:6
const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:27017/fruitsDB", { useNewUrlParser: true, useUnifiedTopology: true })

const fruitSchema = new mongoose.Schema({
  name: {
    type: String,
    // required: [true, "Please check your data entry, no name specified"]
  },
  rating: {
    type: Number,
    min: 1,
    max: 10
  },
  review: String
});

const Fruit = mongoose.model("Fruit", fruitSchema);

const fruit = new Fruit({
  // name: "Peach",
  rating: 10,
  review: "Peaches are so yummy"
});

// fruit.save();

const personSchema = new mongoose.Schema({
  name: String,
  age: Number
})

const Person = mongoose.model("Person", personSchema);

const person = new Person({
  name: "John",
  age: 37
})

// person.save();

// const kiwi = new Fruit({
//   name: "kiwi",
//   score: 10,
//   review: "The best fruit"
// });
//
// const orange = new Fruit({
//   name: "orange",
//   score: 4,
//   review: "Too sour for me"
// })
//
// const banana = new Fruit({
//   name: "banana",
//   score: 3,
//   review: "Weird texture"
// })

// Fruit.insertMany([kiwi, orange, banana], function(err){
//   if (err) {
//     console.log(err)
//   } else {
//     console.log("Success")
//   }
// })

Person.deleteMany({name: "John"}, function(err){
  if (err) {
    console.log(err);
  } else {
    console.log("Success");
  }
})

// Fruit.find(function(err, fruits){
//   if (err) {
//     console.log(err);
//   } else {
//     mongoose.connection.close();
//     console.log(fruits);
//     fruits.forEach(function(fruit){
//       console.log(fruit.name);
//     })
//   }
// })

// Fruit.updateOne({_id:"5e903ef182223478838367e6"}, {name: "Peach"}, function(err) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("Success");
//   }
// })

// Fruit.deleteOne({name: "Peach"}, function(err){
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("Success");
//   }
// })
