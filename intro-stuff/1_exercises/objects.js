// --------------------------------------
// Objects
// --------------------------------------
// Exercise 1 - Retrieve value from object by key

var myObj = {"message": "Hello, earthling! I bring peace."};

// Log the message 

// dot notation
console.log(myObj.message);
//bracket notation
console.log(myObj["message"]);

// --------------------------------------
// Exercise 2 - Defining an object. 
var myself = {"name": "Lassie", "age": 23};
// Create an object that has your name and age. 
console.log(myself.name, myself.age);
// --------------------------------------
// Exercise 3 - Add a property 

var stackOverflow = {};

// make a rule called isAllowed and let the value be true

// CAN ALSO BE stackOverflow
stackOverflow["isAllowed"] = true;
console.log(stackOverflow.forStudying == 0);
// --------------------------------------
// Exercise 4 - Remove a property 

var thisSong = {"description": "The best song in the world."}

// remove the property "description" and add a property called "about" that should say "Just a tribute." 
delete thisSong.description;

//Two versions:
thisSong.about = "Just a tribute";
//thisSong["about"] = "Just a tribute";
console.log(thisSong);
// --------------------------------------

//Array, can hold random elements
var fruits = [1, "banana", {}];