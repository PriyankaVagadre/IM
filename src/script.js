     $(window).scroll(function () {
        if ($(this).scrollTop() > 50) {
           $(".custom-navbar").addClass("changeColor")
        }
        if ($(this).scrollTop() < 50) {
           $(".custom-navbar").removeClass("changeColor")
        }
     });

    
     var a = 0;
      $(window).scroll(function() {

         var oTop = $('#count-div').offset().top - window.innerHeight;
         if (a == 0 && $(window).scrollTop() > oTop) {
           $('.count').each(function() {
             var $this = $(this),
               countTo = $this.attr('data-count');
             $({
               countNum: $this.text()
             }).animate({
                 countNum: countTo
               },

               {

                 duration: 2000,
                 easing: 'swing',
                 step: function() {
                   $this.text(Math.floor(this.countNum));
                 },
                 complete: function() {
                   $this.text(this.countNum);
                   //alert('finished');
                 }

               });
           });
           a = 1;
         }

       });
