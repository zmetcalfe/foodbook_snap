window.onload = (event) => {
    let boxes = document.getElementsByClassName("checkbox");
    let back = document.getElementsByClassName("fa-angle-left")[0];

    for (var i = 0; i < boxes.length; i++) {
        boxes[i].addEventListener("click", function() {
            this.classList.toggle("checked");
        })
    }

    back.addEventListener("click", function() {
        location.href = "bestReviewed.html";
    })
};