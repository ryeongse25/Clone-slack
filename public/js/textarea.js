// 엔터 키
function pressEnter() {
    let msg = document.getElementById("message");
    // enter키가 입력되었을 때 
    if (window.event.keyCode == 13) {
        // 메시지 창이 비어있으면, 줄바꿈을 하지 않고 함수를 종료한다.
        if ( msg.value == "" ) { window.event.preventDefault(); return false; }
        // shift키가 입력되지 않으면, 메시지를 전송하고 줄바꿈을 하지 않는다.
        if ( !window.event.shiftKey ) { btnSend(); window.event.preventDefault(); }
    }
}

// 정렬
function left() {
    $("#message").css("text-align", "left");
}

function center() {
    $("#message").css("text-align", "center");
}

function right() {
    $("#message").css("text-align", "right");
}