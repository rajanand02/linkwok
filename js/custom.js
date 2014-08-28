$(document).ready(function(){
  $(".open-video").click(function(e){
    e.preventDefault();
    $('.youtube').attr('src', '//www.youtube.com/embed/ONLDszjnQCw');
    $(".open-video").hide()
    $(".close-video, .video-block").show()
    $(".content-block").addClass("open")

  })
  $(".close-video").click(function(e){
    e.preventDefault();
    $(".close-video, .video-block").hide()
    $(".open-video").show();
    $(".content-block").removeClass("open")
    $('.youtube').attr('src', '');
  });
  $(".getting-started").click(function(){
    window.location="https://app.linkwok.com"
  });
})
