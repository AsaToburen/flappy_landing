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
    } else if(window.scrollY > 700) {
      
    }
  }

  window.onscroll = scrollListener;



})();
