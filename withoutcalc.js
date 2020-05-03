$(document).ready(function() {
  
  $(".a1").click(function(){
    $(".explain").toggle();
    $(".mc").removeClass("selected");
    $(this).addClass("selected");
    console.log($(this).data());
  });

  $(".b1").click(function(){
    $(".explain").toggle();
    $(".mc").removeClass("selected");
    $(this).addClass("selected");
  });

  $(".c1").click(function(){
    $(".explain").toggle();
    $(".mc").removeClass("selected")
    $(this).addClass("selected");
  });

  $(".d1").click(function(){
    $(".explain").toggle();
    $(".mc").removeClass("selected");
    $(this).addClass("selected");
  });
  
  $(".tutorbutton").click(function(){
    $(".chatbox").toggle();
  });
  
  var timer2 = "5:00";
  var interval = setInterval(function(){
    var timer = timer2.split(":");
    var minutes = parseInt(timer[0], 10);
    var seconds = parseInt(timer[1], 10);
    --seconds;
    minutes = (seconds < 0) ? --minutes: minutes;
    seconds = (seconds < 0) ? 59: seconds;
    seconds = (seconds < 10) ? '0' + seconds: seconds;
    $(".countdown").html(minutes + ":" + seconds);
    if(minutes < 0) clearInterval(interval);
    if (seconds <= 0 && minutes <= 0) 
      clearInterval(interval);
      timer2 = minutes + ":" + seconds; 
  }, 1000);
  
  
});