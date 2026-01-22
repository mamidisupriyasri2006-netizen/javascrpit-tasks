 function operations(a, b) {
    console.log("Addition:", a + b);
    console.log("Subtraction:", a - b);
    console.log("Multiplication:", a * b);
    console.log("Division:", a / b);
    return "Operations performed successfully";
}
console.log(operations(10, 5));


// Arrow function
const square = (num) => num * num;
console.log("Square of 4 is:", square(4));


// Student details
function student_details() {
    let details = [
        { name: "Supriya", age: 20, branch: "BSc", cgpa: 9.1 },
        { name: "Anusha", age: 22, branch: "BSc", cgpa: 9.1 },
        { name: "Tanu sri", age: 22, branch: "BSc", cgpa: 9.3 },
        { name: "Ramya", age: 21, branch: "BSc", cgpa: 9.3 },
        { name: "Poojitha", age: 22, branch: "BSc", cgpa: 9.3 }
    ];
    return details;
}
console.log(student_details());


// Average marks
function Average() {
    let students = [
        { name: "Supriya", maths: 98, science: 95, english: 93 },
        { name: "Anusha", maths: 87, science: 89, english: 85 },
        { name: "Tanu sri", maths: 92, science: 90, english: 91 },
        { name: "Ramya", maths: 88, science: 86, english: 84 },
        { name: "Poojitha", maths: 76, science: 74, english: 72 }
    ];

    let result = "";
    for (let i = 0; i < students.length; i++) {
        let avg = (students[i].maths + students[i].science + students[i].english) / 3;
        result += `Average marks of ${students[i].name} is: ${avg.toFixed(2)}\n`;
    }
    return result;
}
console.log(Average());


// Highest marks
const highestMarks = () => {
    let students = [
        { name: "Supriya", maths: 98, science: 95, english: 93 },
        { name: "Anusha", maths: 87, science: 89, english: 85 },
        { name: "Tanu sri", maths: 92, science: 90, english: 91 },
        { name: "Ramya", maths: 88, science: 86, english: 84 },
        { name: "Poojitha", maths: 76, science: 74, english: 72 }
    ];

    let highest = 0;
    let topper = "";

    for (let i = 0; i < students.length; i++) {
        let total = students[i].maths + students[i].science + students[i].english;
        if (total > highest) {
            highest = total;
            topper = students[i].name;
        }
    }
    return `The highest marks are scored by ${topper} with total marks: ${highest}`;
};
console.log(highestMarks());


// Print results
function printResults() {
    let students = [
        { name: "Supriya", maths: 98, science: 95, english: 93 },
        { name: "Anusha", maths: 87, science: 89, english: 85 },
        { name: "Tanu sri", maths: 92, science: 90, english: 91 },
        { name: "Ramya", maths: 88, science: 86, english: 84 },
        { name: "Poojitha", maths: 76, science: 74, english: 72 }
    ];

    let results = "";
    for (let i = 0; i < students.length; i++) {
        let total = students[i].maths + students[i].science + students[i].english;
        let avg = total / 3;
        results += `Name: ${students[i].name}, Total Marks: ${total}, Average Marks: ${avg.toFixed(2)}\n`;
    }
    return results;
}
console.log(printResults());
