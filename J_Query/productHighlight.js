$(document).ready(function () {

    // 1. Click product → highlight
    $(".product").click(function () {

        // Check for out-of-stock using data attribute
        if ($(this).data("stock") === 0) {
            alert("Sorry! This product is OUT OF STOCK.");
            return;
        }

        $(".product").removeClass("highlight");  
        $(this).addClass("highlight");
    });

    // 2. Hover → show additional details
    $(".product").hover(
        function () {
            $(this).find(".details").slideDown();
        },
        function () {
            $(this).find(".details").slideUp();
        }
    );

    // 3. Favorite icon toggle
    $(".fav").click(function (e) {
        e.stopPropagation(); // prevents clicking product
        $(this).toggleClass("selected");
    });

    // 4. Discount style already applied via CSS attribute selector
});
