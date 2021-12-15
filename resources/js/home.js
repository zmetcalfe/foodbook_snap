
$(document).ready(function(){
    // Only clicks required are on profile and rest. reviews
    $("#profileLink").click(function(){
        location.href = "my-profile.html";
    })

    $("#reviewsButton").click(function(){
        location.href = "bestReviewed.html";
    })
});