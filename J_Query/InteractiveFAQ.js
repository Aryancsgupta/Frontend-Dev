$(document).ready(function () {

    // 1. Click → toggle answer visibility
    $(".question").click(function () {
        $(this).next(".answer").slideToggle();
    });

    // 2. Hover → change question color
    $(".question").hover(
        function () {
            $(this).css("color", "blue");
        },
        function () {
            $(this).css("color", "black");
        }
    );

    // 3. Double-click → collapse ALL answers
    $(".question").dblclick(function () {
        $(".answer").slideUp();
    });

    // 4. Focus on input → highlight parent question
    $(".answer-input").focus(function () {
        $(this).closest(".faq-item").addClass("highlight");
    });

    // 5. Blur → reset background color
    $(".answer-input").blur(function () {
        $(this).closest(".faq-item").removeClass("highlight");
    });

});
