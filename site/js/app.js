(function() {

  $(".logo_large").velocity("transition.slideUpIn", {
    opacity: [1, 0],
    duration: 2000
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
        translateX: 1200,
        translateY: 80
      }, 1000)
      .velocity({
        translateX: 1600,
        translateY: 40
      }, 1200);

    //.css("background", "url('./img/bird_sprite.png') -78px 5px");
  };


  //var socialAnimate = function() {
  //  $('section.social li')
  //    .velocity("transition.slideLeftIn", {
  //      stagger: 250
  //    })
  //    .delay(750)
  //    .velocity({
  //      opacity: 0
  //    }, 750);
  //};

  var animateLog = 0;

  function scrollListener(ev) {
    if (window.scrollY > 460 && animateLog === 0) {
      animateLog++;
      animateBird();
    } else if (window.scrollY > 600) {
      //socialAnimate();
    }
  }

  window.onscroll = scrollListener;

  $(".logo_large").velocity("transition.slideUpIn", {
    opacity: [1, 0],
    duration: 2000
  });









})();
