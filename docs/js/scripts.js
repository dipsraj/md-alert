$("#button").click(function (e) {
    e.preventDefault();
    let title = $("#title").val();
    let text = $("#text").val();
    mdalert.alert(title,text);
});