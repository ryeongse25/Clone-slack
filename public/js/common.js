window.onload = function() {
    // 화면 로딩 시 메세지 박스에 커서 위치 시키기
    $("#message").focus();
    
    const textbox_container = document.querySelector(".textbox_container");
    const right_container = document.querySelector(".right_container");
    const msgbox_container = document.querySelector(".msg_box");

    $(msgbox_container).css("height", (right_container.offsetHeight - textbox_container.offsetHeight - 125) + "px");

    if ( window.innerWidth > 500 ) {
        $(textbox_container).css("width", (window.innerWidth - 200 - 30) + "px");
    } else {
        console.log("small");
        $(textbox_container).css("width", (window.innerWidth - 30) + "px");
    }

    // 프로필에 username 입력하기
    $("#username").text(username);
    $("#h_input_username").val(username);
}

window.onresize = function() {
    const textbox_container = document.querySelector(".textbox_container");
    const right_container = document.querySelector(".right_container");
    const msgbox_container = document.querySelector(".msg_box");

    $(msgbox_container).css("height", (right_container.offsetHeight - textbox_container.offsetHeight - 125) + "px");

    if (window.innerWidth > 500) {
        $(textbox_container).css("width", (window.innerWidth - 200 - 30) + "px");        
    } else {
        $(textbox_container).css("width", (window.innerWidth - 30) + "px");
    }
}

$(".dropdown").on("click", function( obj ){
    let target = obj.currentTarget;
    let children = $(target).children()[0];
    console.log( children );
    $(children).toggleClass("turnRight");
});