$(function() {
    $.ajax({
        url: "/getStudents"
    }).done(function(response) {
        var student = response;
        for(var i = 0; i < student.length; i++){
            if(i = 0) {
                $('.students').append("<li data-target=\"#myCarousel\" data-slide-to=\"0\" class=\"active\">" +
                    student[i].name +
                    "<br>About:" + student[i].description +
                    "<br>Shout Out: \"" + student[i].shoutOut + "\"</li>");

            } else {
                $('.students').append("<li data-target=\"#myCarousel\" data-slide-to=\"0\">" +
                    student[i].name +
                    "<br>About:" + student[i].description +
                    "<br>Shout Out: \"" + student[i].shoutOut + "\"</li>");
            }
        }
    });
});