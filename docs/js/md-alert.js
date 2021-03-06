let mdalert = function () {

    let displayAlert_ = function (title="Sorry", text="Error") {

        $(".md-modal").remove();

        let alertDiv = "<div id=\"md-modal\" class=\"md-modal\">\n" +
            "    <div class=\"modal-content enter-alert\">\n" +
            "        <h3 class=\"modal-title\"></h3>\n" +
            "        <h6 class=\"modal-text\"></h6>\n" +
            "        <button class=\"modal-button\" id='modal-button' >OK</button>\n" +
            "    </div>\n" +
            "</div>";

        $("body").append(alertDiv);
        $('#modal-button').focus();

        $(".modal-title").text(title);
        $(".modal-text").text(text);

        let ok = document.getElementById("modal-button");

        $(window).click(function (event) {
            if (event.target === ok) {
                $(".modal-content").addClass("exit-alert");
                $(".md-modal").fadeOut(312, function() { $(this).remove(); });
            }
        });

    };

    return{
        alert:function (title, text) {
            displayAlert_(title, text);
        }
    }

}();