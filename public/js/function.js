function showProfile() {
    $(".profile").toggleClass("hide");
}

function imgPreview() {
    // input[type="file"] 태그
    let file = document.getElementById("upload_profile_img");
    // 이미지를 넣을 태그
    let img = document.querySelector(".profile_header img");
    let nav_img = document.querySelector(".profile_icon img");

    if (file.files.length > 0) {
        let reader = new FileReader();

        reader.onload = function(data) {
            img.src = data.target.result;
            nav_img.src = data.target.result;
        }
        reader.readAsDataURL(file.files[0]);
    } else {
        img.src = "/profile_img/sample.png";
        nav_img.src = "/profile_img/sample.png";
    }

    let formData = new FormData();
    let fileUpload = document.getElementById("upload_profile_img");

    formData.append("name", username);
    formData.append("userfile", fileUpload.files[0]);

    axios({
        method: "post",
        url: "/",
        data: formData
    }).then((response) => {
        return response.data;
    });
}

function dropdown(target) {
    $(target).toggleClass("hide");
}