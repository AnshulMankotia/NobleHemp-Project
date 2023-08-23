new Drift(document.querySelector('.drift-demo-trigger'), {
  paneContainer: document.querySelector('.item1'),
  inlinePane: 769,
  inlineOffsetY: -85,
  containInline: true,
  hoverBoundingBox: true
  });



/**************slider***************** */
        const nextIcon =
        '<img src= "./assets/right-side.svg" alt:"right">';
     const prevIcon =
        '<img src= "./assets/left-side.svg" alt:"left">';
     jQuery(document).ready(function() {
        var sync1 = jQuery("#sync1");
        var sync2 = jQuery("#sync2");
        var slidesPerPage = 5;
        var syncedSecondary = true;
    
        sync1
         .owlCarousel({
         items: 1,
         slideSpeed: 3000,
         nav: true,
         dots: false,
         loop: true,
         responsiveClass: true,
         responsive: {
            0: {
             item: 1,
             // autoplay: false
            },
            600: {
             items: 1,
             // autoplay: true
            }
         },
         responsiveRefreshRate: 200,
         navText: [prevIcon, nextIcon],
        })
         .on("changed.owl.carousel", syncPosition);
    
        sync2
         .on("initialized.owl.carousel", function() {
         sync2
            .find(".owl-item")
            .eq(0)
            .addClass("current");
        })
         .owlCarousel({
         items: slidesPerPage,
         dots: false,
         // nav: true,
         smartSpeed: 1000,
         slideSpeed: 1000,
         slideBy: slidesPerPage, //alternatively you can slide by 1, this way the active slide will stick to the first item in the second carousel
         responsiveRefreshRate: 100
        })
         .on("changed.owl.carousel", syncPosition2);
    
        function syncPosition(el) {
         var count = el.item.count - 1;
         var current = Math.round(el.item.index - el.item.count / 2 - 0.5);
    
         if (current < 0) {
            current = count;
         }
         if (current > count) {
            current = 0;
         }
        }
    
        function syncPosition2(el) {
         if (syncedSecondary) {
            var number = el.item.index;
            sync1.data("owl.carousel").to(number, 100, true);
         }
        }
    
        sync2.on("click", ".owl-item", function(e) {
         e.preventDefault();
         var number = jQuery(this).index();
         sync1.data("owl.carousel").to(number, 300, true);
        });
    
    //*****active-class-add******//
        $(".item1").click(function () {
         $(".item1").removeClass("active");
         $(this).addClass("active");
        });
        

    
    //*****counter-number******//
    $(document).ready(function() {
         $('.minus').click(function () {
            var $input = $(this).parent().find('input');
            var count = parseInt($input.val()) - 1;
            count = count < 1 ? 1 : count;
            $input.val(count);
            $input.change();
            return false;
         });
         $('.plus').click(function () {
            var $input = $(this).parent().find('input');
            $input.val(parseInt($input.val()) + 1);
            $input.change();
            return false;
         });
        });
    
        
        // ************tabs************//
        $('.tab-link').click( function() {
    
        var tabID = $(this).attr('data-tab');
    
        $(this).addClass('active').siblings().removeClass('active');
    
        $('#tab-'+tabID).addClass('active').siblings().removeClass('active');
        });
     });