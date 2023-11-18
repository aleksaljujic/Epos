
$(document).ready(function () {
    $(window).scroll(function () {
        if (this.scrollY > 20) {
            $(".nav").addClass("scroll-nav");
            $(".nav-btn").addClass("scroll-nav-btn");
            $(".nav-btn-a").addClass("scroll-nav-a");
        } else {
            $(".nav").removeClass("scroll-nav");
            $(".nav-btn").removeClass("scroll-nav-btn");
            $(".nav-btn-a").removeClass("scroll-nav-a");
        }
    });
});
