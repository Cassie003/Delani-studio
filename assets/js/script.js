$(document).ready(function () {
    // mouse click scroll down
    $(".mouse_click").click(function () {
        $('html, body').animate({
            scrollTop: $(".about_us").offset().top
        }, 100);
    });
    //  what we do section
    $("#design").click(function (e) {
        $("#design").toggle();
        $("#p-design").show();
    });

    $("#development").click(function (e) {
        $("#development").toggle();
        $("#p-development").toggle();
    });

    $("#product").click(function (e) {
        $("#product").toggle();
        $("#p-product").toggle();
    });

    $("#p-design").click(function (e) {
        $("#design").toggle();
        $("#p-design").toggle();
    });

    $("#p-development").click(function (e) {
        $("#development").toggle();
        $("#p-development").toggle();
    });

    $("#p-product").click(function (e) {
        $("#product").toggle();
        $("#p-product").toggle();
    });

     // portfolio effects
     $(".div1").hover(function () {
        // over
        $(".po1").animate({ opacity: 1 }, 50);
        $(".pn1").addClass("portfolio-hover-effect");
    }
        , function () {
            // out
            $(".po1").animate({ opacity: 0 }, 50);
            $(".pn1").removeClass("portfolio-hover-effect");
        }
    );

    $(".div2").hover(function () {
        // over
        $(".po2").animate({ opacity: 1 }, 50);
        $(".pn2").addClass("portfolio-hover-effect");
    }
        , function () {
            // out
            $(".po2").animate({ opacity: 0 }, 50);
            $(".pn2").removeClass("portfolio-hover-effect");
        }
    );

    $(".div3").hover(function () {
        // over
        $(".po3").animate({ opacity: 1 }, 50);
        $(".pn3").addClass("portfolio-hover-effect");
    }
        , function () {
            // out
            $(".po3").animate({ opacity: 0 }, 50);
            $(".pn3").removeClass("portfolio-hover-effect");
        }
    );

    $(".div4").hover(function () {
        // over
        $(".po4").animate({ opacity: 1 }, 50);
        $(".pn4").addClass("portfolio-hover-effect");
    }
        , function () {
            // out
            $(".po4").animate({ opacity: 0 }, 50);
            $(".pn4").removeClass("portfolio-hover-effect");
        }
    );

    $(".div5").hover(function () {
        // over
        $(".po5").animate({ opacity: 1 }, 50);
        $(".pn5").addClass("portfolio-hover-effect");
    }
        , function () {
            // out
            $(".po5").animate({ opacity: 0 }, 50);
            $(".pn5").removeClass("portfolio-hover-effect");
        }
    );

    $(".div6").hover(function () {
        // over
        $(".po6").animate({ opacity: 1 }, 50);
        $(".pn6").addClass("portfolio-hover-effect");
    }
        , function () {
            // out
            $(".po6").animate({ opacity: 0 }, 50);
            $(".pn6").removeClass("portfolio-hover-effect");
        }
    );

    $(".div7").hover(function () {
        // over
        $(".po7").animate({ opacity: 1 }, 50);
        $(".pn7").addClass("portfolio-hover-effect");
    }
        , function () {
            // out
            $(".po7").animate({ opacity: 0 }, 50);
            $(".pn7").removeClass("portfolio-hover-effect");
        }
    );

    $(".div8").hover(function () {
        // over
        $(".po8").animate({ opacity: 1 }, 50);
        $(".pn8").addClass("portfolio-hover-effect");
    }
        , function () {
            // out
            $(".po8").animate({ opacity: 0 }, 50);
            $(".pn8").removeClass("portfolio-hover-effect");
        }
    );
