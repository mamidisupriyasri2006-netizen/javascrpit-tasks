function display() {
    array = [
        name = "supriya",
        age = 19,
        course = "Ui/Ux"
    ];
    for (let i = 0; i < array.length; i++) {
        console.log(array[i]);
    }

}
display();


function object() {
    let values = {
        vehicle: "car",
        brand: "BMW",
        dop: "12/12/2025",
        owner: "yashwanth"
    };
    for (let key in values) {
        console.log(key + ":" + values[key]);
    }
}
object();