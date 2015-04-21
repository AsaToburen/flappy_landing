(function() {

  $('.logo_large').velocity('transition.slideUpIn', {
    opacity: [1, 0],
    display: 'block',
    duration: 2000
  });

  var controller = new ScrollMagic.Controller();

  var scene = new ScrollMagic.Scene({
      triggerElement: 'section.social'
    })
    .setVelocity('section.social h2', 'transition.slideDownIn', {
      opacity: [1, 0]
    }, {
      duration: 600
    })
    //.addIndicators()
    .addTo(controller);

  var gameInfo = new ScrollMagic.Scene({
      triggerElement: 'section.game-info'
    })
    .setVelocity('.game-info li', 'transition.slideLeftIn', {
      opacity: 1,
      duration: 1000
    })
    //.addIndicators()
    .addTo(controller);

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

  var width = $(document).width();
  var animateLog = 0;

  function scrollListener(ev) {
    if (width < 700) {
      noAnimation = true;
    } else if (window.scrollY > 208 && animateLog === 0) {
      animateLog++;
      animateBird();
    }
  }
  window.onscroll = scrollListener;

  $('.game-info').find('li h2').click(function() {
    console.log('clicked');
    var heading = this;

    var section = $('section.game-info');
    $(this).next().css('display', 'block').velocity('transition.slideDownIn', 1200);
    $(section).css("height", "+=220px");
  });

})();
