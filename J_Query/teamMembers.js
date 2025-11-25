$(document).ready(function () {

    // 1. Click a manager → highlight all direct reports
    $(".manager").click(function () {
        $(".employee").removeClass("highlight");

        let dept = $(this).parent();             // department div
        dept.children(".employee").addClass("highlight");
        $(this).removeClass("highlight");        // manager not highlighted
    });

    // 2. Hover on employee → show contact info using .next()
    $(".employee").hover(
        function () {
            $(this).find(".contact").slideDown();
        },
        function () {
            $(this).find(".contact").slideUp();
        }
    );

    // 3. Click on department → background change using .children()
    $(".department").click(function (e) {
        if ($(e.target).hasClass("employee")) return; // avoid conflict

        $(this).children(".employee").toggleClass("highlight");
    });

    // 4. Random employee → highlight siblings
    $("#randomBtn").click(function () {
        let employees = $(".employee:not(.manager)");
        let random = employees[Math.floor(Math.random() * employees.length)];

        $(employees).removeClass("highlight");
        $(random).siblings(".employee").addClass("highlight");
    });

    // 5. Collapse/expand team
    $(".dept-title").click(function () {
        let parentDept = $(this).parent();
        parentDept.find(".employee").slideToggle();
    });

});
