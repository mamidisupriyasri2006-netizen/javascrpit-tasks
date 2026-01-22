//Callback function
function greet(name,callback){
    console.log(`Hello!!!${name}!!!!`);
    callback();
}
function thankyou(){
    console.log("Have a nice day!!");
}
greet("Supriya",thankyou);

setTimeout(() => {
    console.log("Supriyaa!!!")
}, 2000);