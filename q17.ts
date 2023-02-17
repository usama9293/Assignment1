// Store the locations in an array
let placesToVisit = ['Japan', 'Australia', 'Iceland', 'Peru', 'Thailand'];

// Print the array in its original order
console.log("Original order: " + placesToVisit.join(", "));

// Print the array in alphabetical order without modifying the actual list
console.log("Alphabetical order: " + [...placesToVisit].sort().join(", "));

// Show that the original order is still intact by printing the array
console.log("Original order intact: " + placesToVisit.join(", "));

// Print the array in reverse alphabetical order without changing the order of the original list
console.log("Reverse alphabetical order: " + [...placesToVisit].sort().reverse().join(", "));

// Show that the original order is still intact by printing the array
console.log("Original order intact: " + placesToVisit.join(", "));

// Reverse the order of the list
placesToVisit.reverse();

// Print the array to show that its order has changed
console.log("Reversed order: " + placesToVisit.join(", "));

// Reverse the order of the list again to show it's back to its original order
placesToVisit.reverse();
console.log("Original order restored: " + placesToVisit.join(", "));

// Sort the array in alphabetical order
placesToVisit.sort();
console.log("Alphabetical order: " + placesToVisit.join(", "));

// Sort the array in reverse alphabetical order
placesToVisit.sort((a, b) => b.localeCompare(a));
console.log("Reverse alphabetical order: " + placesToVisit.join(", "));
