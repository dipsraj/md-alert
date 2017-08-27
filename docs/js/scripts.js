$("#button").click(function (e) {
    e.preventDefault();
    let title = $("#title").val();
    if(title.length<1)
        title="Warning";
    let text = $("#text").val();
    if(text.length<1)
        text="No Text Entered";
    mdalert.alert(title,text);
});