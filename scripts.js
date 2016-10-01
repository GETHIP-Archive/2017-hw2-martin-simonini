$(document).ready(function() {
  $.getJSON("https://raw.githubusercontent.com/GETHIP-Classroom/2017-hw2-martin-simonini/master/me.json", function(json){
    console.log(json);
    $("#profile-name").text(json.firstName + " " + json.lastName);
    $("#age").text(json.age);
    $("#profile-picture").attr("src", json.profile);
    $.each(json.nickNames, function(key, value){
      $("#family").append("<li>" + value.fam + "</li>");
    });
  });
});
