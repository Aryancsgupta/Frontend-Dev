class Student {
  constructor(name, marks) {
    this.name = name;
    this.marks = marks;
  }

  // Calculate average using reduce()
  calculateAverage() {
    const avg =
      this.marks.reduce((sum, mark) => sum + mark, 0) / this.marks.length;

    if (avg >= 90) return `Average: ${avg} → Grade A`;
    if (avg >= 75) return `Average: ${avg} → Grade B`;
    if (avg >= 50) return `Average: ${avg} → Grade C`;
    return `Average: ${avg} → Grade F`;
  }
}

// Create 3 student objects
const s1 = new Student("Amit", [95, 90, 88]);
const s2 = new Student("Riya", [70, 80, 75]);
const s3 = new Student("Sam", [40, 50, 45]);

console.log(s1.name, s1.calculateAverage());
console.log(s2.name, s2.calculateAverage());
console.log(s3.name, s3.calculateAverage());
