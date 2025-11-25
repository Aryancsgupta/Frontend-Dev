$(document).ready(function () {

    // 1. Add New Post (append)
    $("#addPost").click(function () {
        $("#posts").append(`
            <div class="post">
                <h3>New Blog Post</h3>
                <p>This is a newly added blog post.</p>
            </div>
        `);
    });

    // 2. Prepend Featured Post
    $("#addFeatured").click(function () {
        $("#posts").prepend(`
            <div class="post highlight">
                <h3>🌟 Featured Post</h3>
                <p>This post is important and appears first.</p>
            </div>
        `);
    });

    // 3. Remove Last Post
    $("#removeLast").click(function () {
        $("#posts .post").last().remove();
    });

    // 4. Add Tags using .before() and .after()
    $(".post").each(function () {
        $(this).before(`<span class="tag">Blog</span>`);
        $(this).after(`<span class="tag">End</span>`);
    });

    // 5. Highlight posts containing specific keywords
    $("#highlightKeyword").click(function () {
        $(".post").each(function () {
            let text = $(this).text().toLowerCase();
            if (text.includes("javascript")) {
                $(this).addClass("highlight");
            } else {
                $(this).removeClass("highlight");
            }
        });
    });

});
