class FitnessAnalytics {
  constructor(data) {
    if (data.length === 0) {
      throw new Error("Dataset cannot be empty!");
    }
    this.data = data;
  }

  // 1. Active users (steps > 7000)
  getActiveUsers() {
    return this.data.filter(user => user.steps > 7000);
  }

  // 2. Average calories burned
  getAverageCalories() {
    const total = this.data.reduce((sum, user) => sum + user.calories, 0);
    return total / this.data.length;
  }

  // 3. User summary messages
  getUserSummary() {
    return this.data.map(user => {
      return `${user.user} walked ${user.steps} steps and burned ${user.calories} calories.`;
    });
  }
}

// Dataset
const fitnessData = [
  { user: "A", steps: 8000, calories: 300 },
  { user: "B", steps: 12000, calories: 500 },
  { user: "C", steps: 4000, calories: 200 }
];

// Execute
try {
  const analytics = new FitnessAnalytics(fitnessData);

  console.log("Active Users:", analytics.getActiveUsers());
  console.log("Average Calories:", analytics.getAverageCalories());
  console.log("User Summary:", analytics.getUserSummary());

} catch (error) {
  console.log("Error:", error.message);
}
