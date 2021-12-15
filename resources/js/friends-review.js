window.onload = (event) => {
    let thumbs_up = document.getElementsByClassName("opinion-pos")[0];
    let thumbs_down = document.getElementsByClassName("opinion-neg")[0];
    let write_review = document.getElementsByClassName("write-review-button")[0];
    let close_btn = document.getElementById('close-button');
    sessionStorage.setItem('review', '')

    thumbs_up.addEventListener("click", function() {
        this.classList.toggle("pos");
        thumbs_down.classList.remove("neg");
        sessionStorage.setItem('review', 'pos')
    })
    thumbs_down.addEventListener("click", function() {
        this.classList.toggle("neg");
        thumbs_up.classList.remove("pos");
        sessionStorage.setItem('review', 'neg')
    })

    write_review.addEventListener("click", function() {
        location.href = "review.html";
    })

    close_btn.addEventListener("click", function() {
        location.href = "bestReviewed.html";
    })
};