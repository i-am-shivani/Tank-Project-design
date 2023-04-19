// $(".menu-list-wrep > .menu-triger").click(function () {
//     $(".sub-menu").slideUp(200);
//     if ($(this).parent().hasClass("active")) {
//         $(".menu-list-wrep").removeClass("active");
//         $(this).parent().removeClass("active");
//     }
//     else {
//         $(".menu-list-wrep").removeClass("active");
//         $(this).next(".sub-menu").slideDown(200);
//         $(this).parent().addClass("active");
//     }
// });

// $(document).ready(function(){


//     $(".sub-menu").hide();
      
      
//       $('.menu-list-wrep > .menu-triger').click(function () {
//           var $ul = $(this).siblings('.sub-menu');
//           if ($ul.length > 0) {
//                   $ul.slideToggle(400);
//                   $(".sub-menu").not($ul).slideUp(100);
//                   return false;
//           }
//       });
//   });

$(".menu-list-wrep > .menu-triger > a").on("click", function() {
    if ($(this).is('[href^="#"]')) {
        var $this = $(this).parent();
        if ($this.hasClass("tt-ol-submenu-open")) {
            $this.removeClass("tt-ol-submenu-open");
            $this.next().slideUp(350);
        } else {
            $this.parent().parent().find(".sub-menu").prev().removeClass("tt-ol-submenu-open");
            $this.parent().parent().find(".sub-menu").slideUp(350);
            $this.toggleClass("tt-ol-submenu-open");
            $this.next().slideToggle(350);
        }
    }
    return false;
});
      