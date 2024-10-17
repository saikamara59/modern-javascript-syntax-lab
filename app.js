
    // Use `.map()` to iterate over the following array:
//   Excercise 1 
  const nums = [13, 87, 2, 89, 12, 4, 90, 63];
  
  const nums2 = nums.map((currentEl)=> {
    return currentEl * 2
  });
  console.log(nums2);"Exercise 1"
  
  // Given the following array, use destructuring to pull out the first and second values and place them into variables. Log both variables.

// Excercise 2
const pizzaToppings = ['Pineapple', 'Olives', 'Anchovies'];
// Your code here
const [firstTopping, secondTopping] = pizzaToppings;
console.log(firstTopping);
console.log(secondTopping);

// Excercise 3
  // Given the following object, use destructuring to create variables `make` and `model` that will hold the respective values.

const car = {
    make: 'Audi',
    model: 'q5',
  };
  
  // Your code here
const { make , model} = car;
console.log(car.make);
console.log(car.model);


// Exercise 4
// Duplicate the following array using the spread operator and assign it to `controversialPizzaToppings`. Then, log the variable.

const pizzaToppings1 = ['Pineapple', 'Olives', 'Anchovies'];

// Your code here

const otherToppings = [...pizzaToppings1];
console.log(otherToppings)

// Excercise 5
// Duplicate the following object and spread its values into a new variable `myCar`.

const car1 = {
    make: 'Audi',
    model: 'q5',
  };
  
  // Change the `model` property of `myCar` to 'q7'. Log both objects.
  
  // Your code here
  const clonedcars = {...car1};
clonedcars.make ="myCar";
clonedcars.model = "q7";

console.log("cars",car1);
console.log("cloned",clonedcars)

// Create an object named userProfile. 
// Define a variable named propertyName and assign a string to it (like a username, age, or email). 
// Use propertyName as a dynamic key in userProfile, assigning a relevant value.

// Your code here
// Excercise 6
const propertyName = "username"
const userProfile = {
    [propertyName]: "Saikam225"
};
console.log(userProfile)

// Excercise 8
// Create a function that takes two parameters, `noun` and `adjective`, both with the following respective default values:

// 1. `cat`

// 2. `white`

// The function should log a sentence 'The cat is white.' by default. The function should substitute the appropriate parameters when supplied arguments.

// Your code here

function createdAnimal(noun= "cat", adjective = "white") {
   console.log(`the ${noun} is ${adjective}`);
}
createdAnimal()
createdAnimal("pitbull","black")
// Excercise 9
// Convert the following `if...else` statement in to a ternary:

let pizza = 'tasty';

if (pizza === 'tasty') {
  console.log('yum');
} else {
  console.log('yuck');
}

// Your code here

let food = (pizza !== "tasty") ? "yuck" : "yum";
console.log(food);// "Yum"


// 1. SET LANGUAGE Excercise 10

// Construct a single line of code that assigns a default value using the logical OR operator. This line should match the logic of the following statement: 

// "LANG is equal to localLangConfig or the default value of English."

const localLangConfig = null;  // Change to 'es', 'fr', etc., or keep it null

// a. Create a variable called LANG
// b. Assign LANG the value of localLangConfig or 'en' as a default

// Your code here
const LANG = localLangConfig || "english"
// Log the result
console.log('Language setting:', LANG);

// Excercise 11
// Now check for `cat.age` on `adventurer`. See how it errors out? Use optional chaining in a console.log that it returns undefined instead.

const adventurer = {
    name: 'Alice',
  };
  
  let catAge = adventurer.cat?.age
  
  console.log(catAge);
  





