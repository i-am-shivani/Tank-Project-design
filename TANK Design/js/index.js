var $mouse = { x: 0, y: 0 }; // Cursor position
			var $pos = { x: 0, y: 0 }; // Cursor position
			var $ratio = 0.15; // delay follow cursor
			var $active = false;
			var $ball = $("#ball");

			var $ballWidth = 34;
			var $ballHeight = 34;
			var $ballScale = 1;
			var $ballOpacity = 0.5;
			var $ballBorderWidth = 2;

$(".cursor-alter, .tt-main-menu-list > li > a, .tt-main-menu-list > li > .tt-submenu-trigger > a")
			.not(".magnetic-item") // omit from selection.
			.on("mouseenter", function() {
				gsap.to($ball, {
					duration: 0.3, 
					borderWidth: 0, 
					opacity: 0.2, 
					backgroundColor: "#CCC", 
					width: "100px", 
					height: "100px", 
				});
			}).on("mouseleave", function() {
				gsap.to($ball, {
					duration: 0.3, 
					borderWidth: $ballBorderWidth, 
					opacity: $ballOpacity, 
					backgroundColor: "transparent", 
					width: $ballWidth, 
					height: $ballHeight, 
					clearProps:"backgroundColor" 
				});
			});

			// Overlay menu caret hover.
			$(".tt-ol-submenu-caret-wrap .magnetic-wrap").on("mouseenter", function() {
				gsap.to($ball, { duration: 0.3, scale: 1.3, borderWidth: $ballBorderWidth });
			}).on("mouseleave", function() {
				gsap.to($ball, { duration: 0.3, scale: $ballScale });
			});

$("[data-cursor]").each(function() {
    $(this).on("mouseenter", function() {
        $ball.append('<div class="ball-view"></div>');
        $(".ball-view").append($(this).attr("data-cursor"));
        gsap.to($ball, { duration: 0.3, yPercent: -75, width: 95, height: 95, opacity: 1, borderWidth: 0, backgroundColor: "#FFF" });
        gsap.to(".ball-view", { duration: 0.3, scale: 1, autoAlpha: 1 });
    }).on("mouseleave", function() {
        gsap.to($ball, { duration: 0.3,
                        yPercent: -50, 
                        width: $ballWidth, 
                        height: $ballHeight, 
                        opacity: $ballOpacity, 
                        borderWidth: $ballBorderWidth, 
                        backgroundColor: "transparent"
                     });
        gsap.to(".ball-view", { duration: 0.3, scale: 0, autoAlpha: 0, clearProps:"all" });
        $ball.find(".ball-view").remove();
    });
    $(this).addClass("not-hide-cursor");
});