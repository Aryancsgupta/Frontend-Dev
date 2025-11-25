/*<
script src="jquery-1.x.js"></script>
<script>
    var jq1 = jQuery.noConflict(true);
    // jq1 → handles slider + active widget
</script>
*/
/*
<script src="jquery-3.x.js"></script>
<script>
    var jq2 = jQuery.noConflict(true);
    // jq2 → handles modal + tooltips
</script>
*/
<script>
    // Version 1: Carousel + Active Widget
    jq1(".carousel").carousel();
    jq1(".widget").click(function () {
        jq1(this).addClass("active");
    });

    // Version 2: Modal + Tooltip
    jq2(".notify").click(function () {
        jq2("#popup").modal("show");
    });

    jq2("[data-tip]").hover(function () {
        jq2(this).tooltip();
    });
</script>
