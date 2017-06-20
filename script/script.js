$(document).ready(function(){
        boxReposition(window, '.intro > .logo');
        sideMargin('.intro > .skip');
        sideMargin('.head > nav');
        boxReposition('.profile', '.profile > div');
        boxReposition('.contact', '.contact > div');
        heightMargin('.work3 > a');
        heightMargin('.work4 > a');
        heightMargin('.work5 > a');
        
        $('.intro').click(function(){
          $('.intro').stop().slideUp('slow');
          $('.head').stop().slideUp('slow');
        })
        
        $('.intro').on('mousewheel DOMMouseScroll', function(){
          $('.intro').stop().slideUp('slow');
          $('.head').stop().slideUp('slow');
        })
        
        $('.close').click(function(){
          $('header').stop().slideUp('normal');
          $('.head').stop().slideDown('normal');
        })
        
        $('.show').click(function(){
          $('header').stop().slideDown(700);
          $('.head').stop().slideUp('normal');
        })
        
        $('.menu').click(function(){
          $('header').stop().slideUp('normal');
          $('.head').stop().slideDown('normal'); 
          $('html,body').stop().animate({scrollTop:$(this.hash).offset().top}, 1000);
        })
        
        var state = 0;
        
        $('.txtHide').click(function(){
          if(state == 0) {
            state = 1;
            $('.txtWrap').stop().animate({'margin-left':'-46%'});
            $('.txtHide').stop().css('transform', 'rotate(180deg)');
          } else if(state == 1) {
            state = 0;
            $('.txtWrap').stop().animate({'margin-left':'0'});
            $('.txtHide').stop().css('transform', 'rotate(0deg)');
          }
        })
        
        
        $('#work1').click(function(){
          $('.workBtn').removeClass('active');
          $('#work1').addClass('active');
          $('.work1txt').stop().fadeIn('normal');
          $('.work2txt').stop().fadeOut('normal');
          $('.work3txt').stop().fadeOut('normal');
          $('.work4txt').stop().fadeOut('normal');
          $('.work5txt').stop().fadeOut('normal');
          $('.picWrap').stop().animate({'margin-left':'0'});
        })
        
        $('#work2').click(function(){
          $('.workBtn').removeClass('active');
          $('#work2').addClass('active');
          $('.work2txt').stop().fadeIn('normal');
          $('.work1txt').stop().fadeOut('normal');
          $('.work3txt').stop().fadeOut('normal');
          $('.work4txt').stop().fadeOut('normal');
          $('.work5txt').stop().fadeOut('normal');
          $('.picWrap').stop().animate({'margin-left':'-100%'});
        })
        
        $('#work3').click(function(){
          $('.workBtn').removeClass('active');
          $('#work3').addClass('active');
          $('.work3txt').stop().fadeIn('normal');
          $('.work1txt').stop().fadeOut('normal');
          $('.work2txt').stop().fadeOut('normal');
          $('.work4txt').stop().fadeOut('normal');
          $('.work5txt').stop().fadeOut('normal');
          $('.picWrap').stop().animate({'margin-left':'-200%'});
        })
        
        $('#work4').click(function(){
          $('.workBtn').removeClass('active');
          $('#work4').addClass('active');
          $('.work4txt').stop().fadeIn('normal');
          $('.work1txt').stop().fadeOut('normal');
          $('.work2txt').stop().fadeOut('normal');
          $('.work3txt').stop().fadeOut('normal');
          $('.work5txt').stop().fadeOut('normal');
          $('.picWrap').stop().animate({'margin-left':'-300%'});
        })
        
        $('#work5').click(function(){
          $('.workBtn').removeClass('active');
          $('#work5').addClass('active');
          $('.work5txt').stop().fadeIn('normal');
          $('.work1txt').stop().fadeOut('normal');
          $('.work2txt').stop().fadeOut('normal');
          $('.work3txt').stop().fadeOut('normal');
          $('.work4txt').stop().fadeOut('normal');
          $('.picWrap').stop().animate({'margin-left':'-400%'});
        })
        
        var w3s = 0;
        
        $('.next3').click(function(){
          if(w3s == 0) {
            w3s = 1;
            $('.work3 > .pic > .imgWrap > .images').stop().animate({'margin-left':'-50%'});
          } else if(w3s == 1){
            w3s = 0;
            $('.work3 > .pic > .imgWrap > .images').stop().animate({'margin-left':'0%'});
          }
          
        })
        
        $('.prev3').click(function(){
          if(w3s == 0) {
            w3s = 1;
            $('.work3 > .pic > .imgWrap > .images').stop().animate({'margin-left':'-50%'});
          } else if(w3s == 1){
            w3s = 0;
            $('.work3 > .pic > .imgWrap > .images').stop().animate({'margin-left':'0%'});
          }
          
        })
        
        
        var w4s = 0;
        
        $('.next4').click(function(){
          if(w4s == 0) {
            w4s = 1;
            $('.work4 > .pic > .imgWrap').stop().animate({'margin-left':'-100%'});
          } else if(w4s == 1){
            w4s = 0;
            $('.work4 > .pic > .imgWrap').stop().animate({'margin-left':'0%'});
          }
          
        })
        
        $('.prev4').click(function(){
          if(w4s == 0) {
            w4s = 1;
            $('.work4 > .pic > .imgWrap').stop().animate({'margin-left':'-100%'});
          } else if(w4s == 1){
            w4s = 0;
            $('.work4 > .pic > .imgWrap').stop().animate({'margin-left':'0%'});
          }
          
        })
        
        var w5s = 0;
        
        $('.next5').click(function(){
          if(w5s == 0) {
            w5s = 1;
            $('.work5 > .pic > .imgWrap').stop().animate({'margin-left':'-100%'});
          } else if(w5s == 1){
            w5s = 0;
            $('.work5 > .pic > .imgWrap').stop().animate({'margin-left':'0%'});
          }
          
        })
        
        $('.prev5').click(function(){
          if(w5s == 0) {
            w5s = 1;
            $('.work5 > .pic > .imgWrap').stop().animate({'margin-left':'-100%'});
          } else if(w5s == 1){
            w5s = 0;
            $('.work5 > .pic > .imgWrap').stop().animate({'margin-left':'0%'});
          }
          
        })
      })
      
      $(window).load(function(){
        boxReposition(window, '.intro > .logo');
        sideMargin('.intro > .skip');
        sideMargin('.head > nav');
        boxReposition('.profile', '.profile > div');
        boxReposition('.contact', '.contact > div');
        heightMargin('.work3 > a');
        heightMargin('.work4 > a');
        heightMargin('.work5 > a');
      })
      
      $(window).resize(function(){
        boxReposition(window, '.intro > .logo');
        sideMargin('.intro > .skip');
        sideMargin('.head > nav');
        boxReposition('.profile', '.profile > div');
        boxReposition('.contact', '.contact > div');
        heightMargin('.work3 > a');
        heightMargin('.work4 > a');
        heightMargin('.work5 > a');
      })
      
      function boxReposition(parents, box){
        var windowWidth = $(parents).width();
        var boxWidth = $(box).width();
        var windowHeight = $(parents).height();
        var boxHeight = $(box).height();
        
        $(box).css('top', (windowHeight - boxHeight)/2);
        $(box).css('left', (windowWidth - boxWidth)/2);
      }
      
      function sideMargin(box){
        var windowWidth = $(window).width();
        var boxWidth = $(box).width();
        
        $(box).css('left', (windowWidth - boxWidth)/2);
      }
      
      function heightMargin(box){
        var windowHeight = $(window).height();
        var boxHeight = $(box).height();
        
        $(box).css('top', (windowHeight - boxHeight)/2);
      }
