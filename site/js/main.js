(function() {

  $(".logo_large").velocity("transition.slideUpIn", {
    opacity: [1, 0],
    duration: 2000
  });

  var animateBird = function() {

    $('#bird-flap').velocity({
        translateX: 70,
        translateY: 130
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
        translateY: 80
      }, 1000)
      .velocity({
        translateX: 1400,
        translateY: 40
      }, 1200)
      .css('display', 'none');

    //.css("background", "url('./img/bird_sprite.png') -78px 5px");
  };


   var animateLog = 0;

  function birdListener(ev) {
    if (window.scrollY > 460 && animateLog === 0) {
      animateLog++;
      animateBird();
    }
  }

  window.onscroll = birdListener;

  var $bird = document.getElementById('bird-flap');





})();
