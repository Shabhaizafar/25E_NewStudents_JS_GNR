//=> What is an Object : 
//-> It's Collection of Properties and Methods. 
// Property :   it's a pair of key + value.
// Method   :   in directly it's function. (more expalaination soon)



// How to Create an Empty Object ? 
// => USING OBJECT LITERAL : 
// var myobj = {};   // {}   Object Literal    
// console.log(myobj);
// console.log(typeof myobj);



// Fill Object :
var person = {
    // Key    +  value     =   property
    firstname : "Ajay",
    lastname : "Shah",
    age : 12 ,
    gender : "Male"
};
console.log(person);




// How to Access Property value : 
// 1. using dot Notation : 
// console.log(person.firstname);

// 2. using Bracket Notation : 
// console.log(person['age']);



// How to Modify/Changed Property Value : 
// 1. using dot Notation : 
// person.firstname = "Raj";

// 2. using Bracket Notation : 
// person['lastname'] = "Patel";
// console.log(person);



// How to Add a New Property : 
// 1. using dot Notation : 
// person.middlename = "Rakesh";

// 2. using Bracket Notation : 
// person['contactno'] = 1234567890;
// console.log(person);




// How to Delete a Property : 
// 1. using dot Notation : 
// delete person.firstname;

// // 2. using Bracket Notation : 
// delete person['age'];
// console.log(person);




// We can Delete Full Object ?   : No
// delete person;
// console.log(person);



/*


 // let car = {
 //     brand: "Toyota",
 //     model: "Camry",
 //     year: 2022,
 //     color: "Silver"
 //   };
 
 
 
 // Print full object: How would you log the entire car object to the console?
 
 // dot notation   bracket notation
 // Access property value: Using dot notation, how do you access the brand of the car?
 
 // Modify property value: If you wanted to update the year of the car to 2023, how would you do it?
 
 // Add new property: What steps would you take to add a mileage property with a value of 15000 to the car object?
 
 // Delete property: How can you remove the color property from the car object?
*/


































