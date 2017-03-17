function showMessage() {
    "use strict";
    var doc = document, win = window;
    var winHeight = win.innerHeight || doc.documentElement.clientHeight,
        winWidth = win.innerWidth || doc.documentElement.clientWidth;
    $("#btn").click(function () {
        $("#pageDiv").css(
            {
                display: "block",
                width: winWidth + "px",
                height: winHeight + "px"
            }
        );
        $("#pageDiv *").css(
            {
                display: "inline-block"
            }
        );
        $("#pageDiv>div").css(
            {
                left: winWidth / 4 + "px",
                top: winHeight / 4 + "px"
            }
        );
    });
    $(window).resize(function () {
        var winHeight = win.innerHeight || doc.documentElement.clientHeight,
            winWidth = win.innerWidth || doc.documentElement.clientWidth;
        if ($("#pageDiv")) {
            $("#pageDiv").css({
                width: winWidth + "px",
                height: winHeight + "px"
            });
            $("#pageDiv>div").css(
                {
                    left: winWidth / 4 + "px",
                    top: winHeight / 4 + "px"
                }
            );
        }
    });
    $("#pageDiv>div>div:last-child>button").click(function(){

        $("#pageDiv").css({
            display:"none"
        });


    });
    $("#pageDiv").click(function(){

            if(event.target.id==="pageDiv"){
                $("#pageDiv").css({
                    display:"none"
                });
            }
    })
}
showMessage();


