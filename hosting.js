var a = 20;
console.log(a);

function hoist() {
    var sentence = "Hi ! How are you???";
    console.log(sentence);
}
hoist();



var name = "A";

function hoisting() {
    console.log(name);
}
hoisting();


function hoisting() {
    var name = "A";
    console.log(name);
}
hoisting();


var name = "A";
function hoisting() {
    console.log(name);
}
hoisting();