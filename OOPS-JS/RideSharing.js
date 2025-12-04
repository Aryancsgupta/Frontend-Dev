// Base User Class
class User {
  constructor(name, rating) {
    this.name = name;
    this.rating = rating;
  }
}

// Driver inherits User
class Driver extends User {
  constructor(name, rating, vehicle) {
    super(name, rating);
    this.vehicle = vehicle;
  }
}

// Trip Class
class Trip {
  constructor(fromLocation, toLocation, distance) {
    this.fromLocation = fromLocation;
    this.toLocation = toLocation;
    this.distance = distance;
  }

  calculateFare() {
    if (this.distance === undefined || this.distance < 0) {
      throw new Error("Invalid distance provided!");
    }

    const ratePerKm = 12;
    return this.distance * ratePerKm;
  }
}

// Using try-catch
try {
  const user = new User("Amit", 4.8);
  const driver = new Driver("Rohan", 4.9, "Maruti Swift");

  const trip = new Trip("Delhi", "Noida", 15);

  console.log("Fare:", trip.calculateFare());
} 
catch (error) {
  console.log("Error:", error.message);
}

// Invalid Distance Test
try {
  const badTrip = new Trip("Delhi", "Gurgaon", -10);
  console.log(badTrip.calculateFare());
} 
catch (error) {
  console.log("Error:", error.message);
}
