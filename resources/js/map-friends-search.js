window.onload = (event) => {
    let boxes = document.getElementsByClassName("checkbox");

    for (var i = 0; i < boxes.length; i++) {
        boxes[i].addEventListener("click", function() {
            this.classList.toggle("checked");
        })
    }
};