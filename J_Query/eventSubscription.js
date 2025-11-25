$(document).ready(function () {

    // Function to show dynamic success message
    function showSuccess(msg) {
        $("#success").text(msg).fadeIn().delay(1500).fadeOut();
    }

    // 1. Subscribe → enable notifications
    $("#subscribeBtn").click(function () {
        $(".topic").addClass("subscribed");
        showSuccess("Subscribed to all topics!");
    });

    // 2. Unsubscribe → disable notifications
    $("#unsubscribeBtn").click(function () {
        $(".topic").removeClass("subscribed");
        showSuccess("Unsubscribed from all topics.");
    });

    // 3. Add new topic dynamically and attach .on() click event
    $("#addTopic").click(function () {
        let name = $("#newTopicText").val().trim();
        if (name.length === 0) return;

        let newTopic = $("<div class='topic'>" + name + "</div>");

        // attach click event using .on()
        newTopic.on("click", function () {
            $(this).toggleClass("subscribed");
            showSuccess(`Toggled subscription for: ${name}`);
        });

        $("#topics").append(newTopic);
        $("#newTopicText").val("");

        showSuccess(`${name} added successfully!`);
    });

    // 4. Remove specific subscription → detach .off() 
    $("#removeTopic").click(function () {
        let healthTopic = $(".topic:contains('Health')");

        // remove click event using off
        healthTopic.off("click");
        healthTopic.removeClass("subscribed");

        showSuccess("Removed subscription controls for Health.");
    });

    // Default click behavior for existing topics
    $(".topic").on("click", function () {
        $(this).toggleClass("subscribed");
        showSuccess(`Toggled subscription for: ${$(this).text()}`);
    });

});
