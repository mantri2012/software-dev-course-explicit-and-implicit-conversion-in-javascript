/*

Part 1: Debugging Challenge
The JavaScript code below contains intentional bugs related to type conversion.
Please do the following:
  - Run the script to observe unexpected outputs.
  - Debug and fix the errors using explicit type conversion methods like  Number() ,  String() , or    Boolean()  where necessary.
  - Annotate the code with comments explaining why the fix works.

Part 2: Write Your Own Examples
Write their own code that demonstrates:
  - One example of implicit type conversion.
  - One example of explicit type conversion.

  *We encourage you to:
Include at least one edge case, like NaN, undefined, or null .
Use console.log() to clearly show the before-and-after type conversions.

*/

// Explicitly converting the string "5" to a number before subtraction
let result = Number("5") - 2;  // here converting string "5" to number before subtraction
console.log("The result is: " + result); // output is 3 - same 

// 
let isValid = (String("false").toLowerCase() === "false");  // (debuging - Convert the string "false" to a boolean value). Explicit check for the string "false" 
if (!isValid) { // Now, this will evaluate as true when the string "false" is found
    console.log("This is invalid!"); // (debuging - Log "This is valid!" if the condition is true). This will be printed if isValid is false
} // negate the isValid condition (!isValid) so that when isValid is false (i.e., when the string is "false"), it prints "This is invalid!".

//Explicitly converting the string "25" to a number before addition
let age = "25";
let totalAge = Number(age) + 5; // Converting "25" (string) to a number before adding 5
console.log("Total Age: " + totalAge); // now output will be 30 after number addition, initially the output was in implicit type. 


// Implicit type conversion example: 

//let result1 = null + "5";  // Adding null to a string
//console.log(result);  // Output: "null5"

//let result2 = undefined + "10";  // Adding undefined to a string
//console.log(result2);  // Output: "undefined10"

let result1 = (null === null ? 0 : null) + 5;  // Explicit handling of null
console.log(result1);  // Output: 5

let result2 = (undefined === undefined ? 0 : undefined) + 10;  // Explicit handling of undefined
console.log(result2);  // Output: 10

// Explicit type conversion example: converting a string to a number and performing addition
let stringValue = "20";
let numberValue = Number(stringValue);  // Explicitly converting the string to a number
let sum = numberValue + 10;
console.log("Explicit conversion result: " + sum);  // Output: 30 (numeric addition)

