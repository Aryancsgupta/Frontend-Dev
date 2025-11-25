$(document).ready(function () {

    $("#submitBtn").click(function () {
        let isValid = true;

        // Name validation
        if ($("#name").val().trim() === "") {
            $("#name").css("border", "2px solid red");
            isValid = false;
        } else {
            $("#name").css("border", "");
        }

        // Email validation
        let email = $("#email").val();
        let pattern = /^[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;

        if (!pattern.test(email)) {
            $("#email").css("border", "2px solid red");
            isValid = false;
        } else {
            $("#email").css("border", "");
        }

        // Password validation
        if ($("#password").val().length < 8) {
            $("#password").css("border", "2px solid red");
            isValid = false;
        } else {
            $("#password").css("border", "");
        }

        // Final output
        if (isValid) {
            $("#msg").text("Registration Successful!")
                     .css("color", "green");
        } else {
            $("#msg").text("Please correct highlighted fields.")
                     .css("color", "red");
        }
    });
});
