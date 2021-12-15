window.onload = (event) => {
    let rev = sessionStorage.getItem('review');
    let thumbs_up = document.getElementsByClassName("fa-thumbs-up")[0];
    let thumbs_down = document.getElementsByClassName("fa-thumbs-down")[0];
    let close_btn = document.getElementById('close-button');

    if (rev !== "") {
        if (rev === "pos") {
            thumbs_up.classList.add("pos");
        }
        else {
            thumbs_down.classList.add("neg");
        }
    }

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
    
    close_btn.addEventListener("click", function() {
        location.href = "bestReviewed.html";
    })
};