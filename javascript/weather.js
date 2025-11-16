// Q5: Weather Activity Planner
// -----------------------------------------------------
// Suggests an activity based on temperature, rain, and wind speed.

// Variables
let temperature = 28;     // in °C
let isRaining = false;    // boolean
let windSpeed = 15;       // in km/h

// Decision making
if (isRaining) {
    console.log("Stay indoors with hot coffee.");
} 
else if (temperature > 35) {
    console.log("Go swimming.");
} 
else if (temperature < 15 && windSpeed > 20) {
    console.log("Too cold and windy — stay home.");
} 
else {
    console.log("Perfect day for a walk.");
}
