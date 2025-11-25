$(document).ready(function () {

    let banners = $(".banner");
    let index = 0;

    // 1. Hide specific banners
    $("#hide").click(function () {
        banners.hide();
    });

    // 2. Show hidden banners
    $("#show").click(function () {
        banners.show();
    });

    // 3. Slide Up / Down
    $("#slideToggle").click(function () {
        banners.slideToggle();
    });

    // 4. Fade In / Fade Out
    $("#fadeToggle").click(function () {
        banners.fadeToggle();
    });

    // 5. Auto-rotate banners every 5 seconds
    setInterval(function () {
        banners.fadeOut(1000);  

        setTimeout(() => {
            banners.hide();                // hides all
            $(banners[index]).fadeIn(1000); // show only current
        }, 1000);

        index = (index + 1) % banners.length;
    }, 5000);
});
