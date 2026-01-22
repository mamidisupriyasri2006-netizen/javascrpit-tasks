//String to object conversion in JSON

let str='{"name":"Supriya","course":"UI/Ux"}';
let obj=JSON.parse(str);
console.log(obj.course);
//output: UI/Ux

//Object to string conersion in JSON

let newobj=JSON.stringify(obj);
console.log(newobj);