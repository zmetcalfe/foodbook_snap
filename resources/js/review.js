window.onload = (event) => {
    let thumbs_up = document.getElementsByClassName("fa-thumbs-up")[0];
    let thumbs_down = document.getElementsByClassName("fa-thumbs-down")[0];

    thumbs_up.addEventListener("click", function() {
        this.classList.toggle("pos");
        thumbs_down.classList.remove("neg");
    })
    thumbs_down.addEventListener("click", function() {
        this.classList.toggle("neg");
        thumbs_up.classList.remove("pos");
    })

    let close_items = document.getElementsByClassName("close-icon");
    for (var i = 0; i < close_items.length; i++) {
        close_items[i].addEventListener("click", function(){
            this.parentElement.remove();
        })
    }
};