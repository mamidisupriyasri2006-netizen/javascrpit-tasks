// Student object
let student = {
    name: "supriya",
    rollNo: 18,
    marks: {
        maths: 92,
        science: 85,
        english: 78
    }
};

// Function to calculate grade using conditions
function calculateGrade(marks) {
    if (marks >= 90) {
        return "A";
    } else if (marks >= 80) {
        return "B";
    } else if (marks >= 70) {
        return "C";
    } else if (marks >= 60) {
        return "D";
    } else {
        return "Fail";
    }
}

// Function to simulate an event (subject selection)
function showResult(subject) {
    let marks;

    switch (subject) {
        case "Maths":
            marks = student.marks.maths;
            break;

        case "Science":
            marks = student.marks.science;
            break;

        case "English":
            marks = student.marks.english;
            break;

        default:
            console.log("Invalid subject selected!");
            return;
    }

    let grade = calculateGrade(marks);

    console.log("Student Name:", student.name);
    console.log("Roll No:", student.rollNo);
    console.log("Subject:", subject);
    console.log("Marks:", marks);
    console.log("Grade:", grade);
    console.log("-------------------------");
}

// Simulated events (function calls)
showResult("Maths");
showResult("Science");
showResult("English");
