

//JQUERY    FUNCKIJA KOJA DODAJE ODNOSNO BRIŠE VEĆ DEFINISANU KLASU
//KAKO BI NA SKROL MENI, DUGME I LINKOVI U NJEMU PROMENILI BOJU
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

