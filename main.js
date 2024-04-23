"use strict";
//store the location in an array
let placesToVisit = ["Tokyo", "Pakistan", "America", "China", "Japan"];
//print  the array inits orignal order
console.log("Original order:", placesToVisit);
// print the array in alpabetical order without modifying the actual list
console.log("Alphabetical order:", [...placesToVisit].sort());
// Show that the array is still in its original order
console.log("Original order after sorting:", placesToVisit);
// print the array in revers alphabetical order without  changing order of that
console.log("Reverse alphabetical order:", [...placesToVisit].sort().reverse());
// Show that the array is still in its original order
console.log("Original order after reverse sorting:", placesToVisit);
// Sort the array in revers alphabetical order
placesToVisit.sort((a, b) => b.localeCompare(a));
console.log("sorted in revers alphabetical order:", placesToVisit);
