let string1 = "hello";
let string2 = "world";
let num1 = 5;
let num2 = 10;
let array1 = [1, 2, 3, 4, 5];
let array2 = [6, 7, 8, 9, 10];

// Equality and inequality with strings
console.log("Is string1 equal to 'hello'? (Expect true) " + (string1 == "hello"));
console.log("Is string2 not equal to 'world'? (Expect false) " + (string2 != "world"));

// Tests using the lower case function
console.log("Is string1 equal to 'HELLO' when converted to lowercase? (Expect true) " + (string1.toLowerCase() == "hello"));
console.log("Is string2 not equal to 'WORLD' when converted to lowercase? (Expect true) " + (string2.toLowerCase() != "world"));

// Numerical tests
console.log("Is num1 less than num2? (Expect true) " + (num1 < num2));
console.log("Is num2 greater than or equal to num1? (Expect true) " + (num2 >= num1));
console.log("Is num2 equal to 10? (Expect true) " + (num2 == 10));
console.log("Is num1 not equal to 5? (Expect false) " + (num1 != 5));

// Tests using "and" and "or" operators
console.log("Is string1 equal to 'hello' and num1 is less than num2? (Expect true) " + (string1 == "hello" && num1 < num2));
console.log("Is string1 equal to 'world' or num1 is greater than num2? (Expect false) " + (string1 == "world" || num1 > num2));

// Test whether an item is in an array
console.log("Is 3 in array1? (Expect true) " + (array1.includes(3)));
console.log("Is 7 not in array2? (Expect false) " + (!array2.includes(7)));
