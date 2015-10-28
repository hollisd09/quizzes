/* 
-- Create a variable that is an empty string. --
-- Create a variable that holds an empty array. --
-- Create a variable that holds the value of 2. --
-- Add the names of ten fruits to the array. Make sure some of the fruits have the letter 'a' in them. --
-- Set up code to loop over every other item in your array of fruits. --
-- Inside the loop, check if there is the letter 'a' in the name of the current fruit. --
-- If there is an 'a' anywhere in the current fruit name, then replace it with an 'e'. --
Add the new name of the fruit to the variable that was initially set up as an empty string (see step 1).
Update the contents of the fruit-list DOM element with the new fruit name. Each fruit should be displayed as a block-level element type.
-- Each block-level element that contains a fruit name should have a background color (of your choice) applied to it. --a
-- The entire fruit list should have a 1px border around it (not each one individually). --
-- The first fruit's name should be bold text. --
-- The last fruit's text should be 20px in size and the entire element should have a different background color. --
*/



// -------------------------------TRY FIVE-----------------------------------------------

var emptyString = "";
var fruits = [];
var x = 2;
var output = "";
var fruitsElement = document.getElementById("fruit-list");

fruits = ["Apple", "Orange", "Pineapple", "Grape", "Strawberry", "Blueberry", "Raspberry", "Kiwi", "Banana", "Cantaloupe"];

for (var i = 0; i < fruits.length; i +=2) {
	var currentFruit = fruits[i];

	currentFruit = currentFruit.replace(/a/g, "e");
	currentFruit = currentFruit.replace(/A/g, "E");
	console.log("currentFruit", currentFruit);

	output = output + "<section id='fruit-list'>" + currentFruit + "</section>";
}


console.log("output", output);
console.log("fruits", fruits);

fruitsElement.innerHTML = output;


	// for (var i = 0; i < fruits.length; i++) {
	// emptyString.innerHTML = "<section id='fruit-list'>" + currentFruit + "</section>";
	// }






// var ePlanets = planets.filter(function(currentPlanet) {
// 	return currentPlanet.indexOf("e") > -1;
// });
// console.log("ePlanets", ePlanets);










// -------------------------------TRY FOUR-----------------------------------------------

// var emptyString = "";
// var fruits = [];
// var x = 2;

// fruits = ["Apple", "Orange", "Pineapple", "Grape", "Strawberry", "Blueberry", "Raspberry", "Kiwi", "Banana", "Cantaloupe"];

// for (var i = 0; i < fruits.length; i += 2) {
// 	var oldChar = fruist.filter(function(findA) {
// 		return findA.indexOf("a") > -1;
// 	})
// }

// var newChar = fruits.replace(/a/g, "e");
// console.log("newChar", newChar);


// -------------------------------TRY THREE-----------------------------------------------

// var emptyString = "";
// var fruits = [];
// var x = 2;
// var output = "";
// fruits = ["Apple", "Orange", "Pineapple", "Grape", "Strawberry", "Blueberry", "Raspberry", "Kiwi", "Banana", "Cantaloupe"];

// for (var i = 0; i < fruits.length; i += 2) {
// 	var specificLetter = fruits.filter(function(letterA) {
// 		return letterA.indexOf("a") > -1;
// 	letterA = letterA.replace(/letterA//g, "e");
// 		return letterA.replace;
// 	})
// 	output = output + "<section id='fruit-list'>" + fruits + "</section>";
// 	console.log("output", output);
// }

// document.getElementById("fruit-list");

// var fruits = fruits.function.replace(/a/g, "e");
// console.log("fruits", fruits);



// -------------------------------TRY ONE-----------------------------------------------
// var emptyString = "";
// var emptyArray = [];
// var x = 2;

// emptyArray = ["Apple", "Orange", "Pineapple", "Grape", "Strawberry", "Blueberry", "Raspberry", "Kiwi", "Banana", "Cantaloupe"];

// for (var i = 0; i < emptyArray.length; i+=2) {
// 	var specificLetterA = emptyArray.filter(function(letterA) {
// 		return letterA.indexOf("a") > -1;
// 	specificLetterA = specificLetterA.replace("a", "e");
// 	})

// 	console.log("specificLetterA", specificLetterA);

// }

// -------------------------------TRY TWO-----------------------------------------------

// var emptyString = "";
// var fruits = [];
// var x = 2;
// var newLetter = fruits.replace(/a/g, 'e');

// fruits = ["Apple", "Orange", "Pineapple", "Grape", "Strawberry", "Blueberry", "Raspberry", "Kiwi", "Banana", "Cantaloupe"];

// for (var i = 0; i < fruits.length; i += 2) {
// 	var specificLetter = fruits.filter(function(letterA) {
// 		return letterA.indexOf("a") > -1;
// 	newLetter = fruits.replace("a", "e");
// 	})
// }























