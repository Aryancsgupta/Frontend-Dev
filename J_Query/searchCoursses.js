$(document).ready(function () {

    // function to highlight matched text
    function highlight(text, search) {
        if (!search) return text;
        let regex = new RegExp(search, "gi");
        return text.replace(regex, (match) => `<span class="highlight">${match}</span>`);
    }

    // 1. Search input filters courses in real-time
    $("#searchBox").keyup(function () {
        let keyword = $(this).val().toLowerCase();
        let matchCount = 0;

        $(".course").each(function () {
            let courseText = $(this).text().toLowerCase();

            if (courseText.includes(keyword)) {
                $(this).show();
                matchCount++;

                // 2. Highlight matched text
                $(this).html(highlight($(this).text(), keyword));
            } else {
                // 3. Toggle visibility of non-matching
                $(this).hide();
            }
        });

        // 4. Show count of matched courses
        $("#count").text(matchCount);
    });

    // 5. Clear search → reset list
    $("#clearBtn").click(function () {
        $("#searchBox").val("");
        $("#count").text(5);

        $(".course").each(function () {
            $(this).show();
            $(this).html($(this).text()); // remove highlight
        });
    });

});
