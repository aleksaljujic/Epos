// $(function($){
//     var $navBar = $('.nav');
//     $(window).scroll(function(event){
//         var $cur = $(this).scrollTop();
//         if( $cur > 0){
//             $navBar.addClass('.scroll-nav');
//         }else{
//             $navBar.removeClass('.scroll-nav');
//         }

//     });
// });

$(document).ready(function () {
    $(window).scroll(function () {
        // STICKY NAVIGACIONI MENI
        if (this.scrollY > 20) {
            $(".nav").addClass("scroll-nav");
            $(".nav-btn").addClass("scroll-nav-btn")
        } else {
            $(".nav").removeClass("scroll-nav");
            $(".nav-btn").removeClass("scroll-nav-btn");
        }
    });
});

console.log("kkk");