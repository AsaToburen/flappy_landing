(function() {

  $(".logo_large").velocity("transition.slideUpIn", {
    opacity: [1, 0],
    display: "block",
    duration: 2000
  });

  $('section.social h2').velocity('transition.slideDownIn', {
    opacity: [1, 0],
    duration: 1200
  });

  var animateBird = function() {

    $('#bird-flap').velocity({
        translateX: 60,
        translateY: 190
      }, 600)
      .velocity({
        translateX: 370,
        translateY: 270
      }, 1200)
      .velocity({
        translateX: 530,
        translateY: 200
      }, 700)
      .velocity({
        translateX: 720,
        translateY: 270
      }, 900)
      .velocity({
        translateX: 1000,
        translateY: 60
      }, 1000)
      .velocity({
        translateX: 1400,
        translateY: 40
      }, 1200);

    //.css("background", "url('./img/bird_sprite.png') -78px 5px");
  };


  var gameInfo = function() {
    var infoItems = $('li');

    $(".game-info").find(infoItems)
      .velocity("transition.slideLeftIn", {
        stagger: 280
      })
      .delay(1750)
      .velocity({}, 1050);
  };

  gameInfo();


  //$(window).one('scroll', function() {
  //  console.log($(this).scrollTop());
  //});

  $('.game-info').find('li h2').click(function() {
    console.log('clicked');
    var heading = this;
    
    var section = $('section.game-info');
    $(this).next().css('display', 'block').velocity('transition.slideDownIn', 1200);
    $(section).css( "height", "+=120px" );
  });

  var animateLog = 0;

  function scrollListener(ev) {
    if (window.scrollY > 430 && animateLog === 0) {
      animateLog++;
      animateBird();
    } else if (window.scrollY > 700) {
      console.log(700);
    } else if (window.scrollY > 855) {
      
    }
  }

  window.onscroll = scrollListener;



})();
