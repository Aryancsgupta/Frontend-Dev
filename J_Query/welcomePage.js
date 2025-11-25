$(document).ready(function () {

    // 1. Greeting based on time
    let hour = new Date().getHours();
    let greetingText = "";

    if (hour < 12) greetingText = "Good Morning!";
    else if (hour < 18) greetingText = "Good Afternoon!";
    else greetingText = "Good Evening!";

    $("#greeting").text(greetingText);

    // 2. Change greeting button
    $("#changeGreeting").click(function () {
        $("#greeting").text("Keep pushing! Success is near.");
    });

    // 3. Toggle visibility of welcome message
    $("#toggleMessage").click(function () {
        $("#welcomeMsg").toggle();
    });

    // 4. Show alert when greeting is clicked
    $("#greeting").click(function () {
        alert("You clicked the greeting!");
    });

});


