let student = {
    name: "supriya",
    rollNo: 19,
    marks: {
        maths: 72,
        physics: 85,
        chemistry: 78
    }
};

// Function to calculate grade based on average
function calculateGrade(avg) {
    if (avg >= 90) {
        return "A";
    } else if (avg >= 80) {
        return "B";
    } else if (avg >= 70) {
        return "C";
    } else if (avg >= 60) {
        return "D";
    } else {
        return "Fail";
    }
}

// Function to calculate total, average and grade
function resultCalculation() {
    let maths = student.marks.maths;
    let physics = student.marks.physics;
    let chemistry = student.marks.chemistry;

    let total = maths + physics + chemistry;
    let average = total / 3;
    let grade = calculateGrade(average);

    console.log("Student Name:", student.name);
    console.log("Roll No:", student.rollNo);
    console.log("Maths Marks:", maths);
    console.log("Physics Marks:", physics);
    console.log("Chemistry Marks:", chemistry);
    console.log("Total Marks:", total);
    console.log("Average Marks:", average.toFixed(2));
    console.log("Grade:", grade);
}

// Function call
resultCalculation();
