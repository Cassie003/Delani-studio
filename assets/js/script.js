$(document).ready(function () {
    // mouse click scroll down
    $(".mouse_click").click(function () {
        $('html, body').animate({
            scrollTop: $(".about_us").offset().top
        }, 100);
    });
