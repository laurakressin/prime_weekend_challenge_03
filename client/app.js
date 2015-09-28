$(function() {
    $.ajax({
        url: "/getStudents"
    }).done(function(response) {
        var student = response;
        for(var i = 0; i < student.length; i++){
            $('.students').append("<li><h2>" + student[i].name + "</h2>" +
                    "<h3>About:" + student[i].description + "</h3>" +
                    "<h4>Shout Out: \"" + student[i].shoutOut + "\"</h4></li>");
            }
        $('.jcarousel').jcarousel();

        $('.jcarousel-control-prev')
            .on('jcarouselcontrol:active', function() {
                $(this).removeClass('inactive');
            })
            .on('jcarouselcontrol:inactive', function() {
                $(this).addClass('inactive');
            })
            .jcarouselControl({
                target: '-=1'
            });

        $('.jcarousel-control-next')
            .on('jcarouselcontrol:active', function() {
                $(this).removeClass('inactive');
            })
            .on('jcarouselcontrol:inactive', function() {
                $(this).addClass('inactive');
            })
            .jcarouselControl({
                target: '+=1'
            });

        $('.jcarousel-pagination')
            .on('jcarouselpagination:active', 'a', function() {
                $(this).addClass('active');
            })
            .on('jcarouselpagination:inactive', 'a', function() {
                $(this).removeClass('active');
            })
            .jcarouselPagination();
    });
});
