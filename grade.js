// ==========================
// STRING METHODS
// ==========================

// Sum of array elements
function sum() {
    let number = [10, 20, 30, 40, 50];
    let total = 0;
    for (let i = 0; i < number.length; i++) {
        total += number[i];
    }
    return total;
}
console.log("Sum of array elements is:", sum());


// Convert to uppercase
function convertToUpperCase(str) {
    return str.toUpperCase();
}
console.log("Uppercase String is:", convertToUpperCase("hello world"));


// Convert to lowercase
function convertToLowerCase(str) {
    return str.toLowerCase();
}
console.log("Lowercase String is:", convertToLowerCase("HELLO WORLD"));


// Slice string
function sliceString(str, start, end) {
    return str.slice(start, end);
}
console.log("Sliced String is:", sliceString("Hello World", 0, 5));
console.log("Sliced String is:", sliceString("Hello World", -5));


// Includes substring
function includesSubstring(str, substr) {
    return str.includes(substr);
}
console.log("Includes 'World':", includesSubstring("Hello World", "World"));
console.log("Includes 'world':", includesSubstring("Hello World", "world"));



// ==========================
// ARRAY METHODS
// ==========================

// Push (add at end)
function addElement() {
    let arr = [1, 2, 3];
    arr.push(4);
    return arr;
}
console.log("Array after push:", addElement());


// Pop (remove last)
function removeElement() {
    let arr = [1, 2, 3, 4];
    arr.pop();
    return arr;
}
console.log("Array after pop:", removeElement());


// Unshift (add at beginning)
function addAtBeginning() {
    let arr = [5, 6, 7, 8];
    arr.unshift(4);
    return arr;
}
console.log("Array after unshift:", addAtBeginning());


// Shift (remove first)
function removeFromBeginning() {
    let arr = [4, 5, 6, 7, 8];
    arr.shift();
    return arr;
}
console.log("Array after shift:", removeFromBeginning());


// Map (square each element)
function mapArray() {
    let arr = [4, 5, 6, 7, 8];
    let squared = arr.map(num => num * num);
    return squared;
}
console.log("Squared array:", mapArray());


// Filter (values greater than 20)
function filterArray() {
    let arr = [10, 15, 20, 25, 30];
    let filtered = arr.filter(num => num > 20);
    return filtered;
}
console.log("Filtered array:", filterArray());


// forEach (product of elements)
function forEachArray() {
    let arr = [1, 2, 3, 4, 5];
    let product = 1;
    arr.forEach(num => product *= num);
    return product;
}
console.log("Product using forEach:", forEachArray());



// ==========================
// END OF PROGRAM
// ==========================
