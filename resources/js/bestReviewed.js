$(document).ready(function(){
    // Only clicks required are on profile and rest. reviews
    $("#filterMap").click(function(){
        location.href = "review.html";
    });

    $("#goHome").click(function(){
        location.href = "mapHome.html";
    });

    $("#menuSearch").click(function(){
        location.href = "map-friends-search.html";
    });
});