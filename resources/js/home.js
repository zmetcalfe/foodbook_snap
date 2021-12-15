
$(document).ready(function(){
    // Only clicks required are on profile and rest. reviews
    $("#profileLink").click(function(){
        location.href = "my-profile.html";
    })

    // TODO: Rest review click
    $("#reviewsButton").click(function(){
        location.href = "bestReviewed.html";
    })
});