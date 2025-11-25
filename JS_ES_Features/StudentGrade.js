// Q10. Student Grade Evaluator

function calculateGrade(m1, m2, m3) {

    // Nested function to check pass/fail
    function isPassed() {
        return (m1 >= 33 && m2 >= 33 && m3 >= 33);
    }

    const average = (m1 + m2 + m3) / 3;

    let grade = "";
    if (average >= 90) grade = "A";
    else if (average >= 75) grade = "B";
    else if (average >= 50) grade = "C";
    else grade = "D";

    console.log("Marks:", m1, m2, m3);
    console.log("Average:", average);
    console.log("Grade:", grade);
    console.log("Passed?", isPassed());
}

// Test the function
calculateGrade(90, 92, 95);  // A grade, pass
calculateGrade(40, 20, 45);  // D grade, fail
