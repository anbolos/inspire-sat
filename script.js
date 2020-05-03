/* If you're feeling fancy you can add interactivity 
  to your site with Javascript */
  
var userInput = {
  userType: "",
  timeAvailable: [],
  testType: "",
  subject: ""   
}
  
var toggle = 0;

$(document).ready(function(){

  $(".ourMission, .explanation, .pageTwo, .pageThree, .pageFour").hide();  

  function toggling(classes){
    if (toggle === 0) {
      $(classes).fadeIn(500);
      toggle = 1;
    } else {
      $(classes).fadeOut(500);
      toggle = 0;
    }
  }

    $("#SAT").click(function(){
      toggling(".explanation");
    });
  
    $("#aboutus").click(function(){
      toggling(".ourMission");
    })

    $("#student").click(function(){
      inputData(".pageTwo",".pageOne","userType","Student");
    });

    $("#educator").click(function(){
      inputData(".pageTwo",".pageOne","userType","Educator");
    });

    $("#sat").click(function(){
      inputData(".pageThree",".pageTwo","testType","SAT");
    });

    $("#fiveMinutes").click(function(){
      inputData(".pageFour",".pageThree","timeAvailable","5:00");
    });
    $("#tenMinutes").click(function(){
      inputData(".pageFour",".pageThree","timeAvailable","10:00");
    });
    $("#fifteenMinutes").click(function(){
      inputData(".pageFour",".pageThree","timeAvailable","15:00");
    });
    $("#twentyMinutes").click(function(){
      inputData(".pageFour",".pageThree","timeAvailable","20:00");
    });
    $("#more").click(function(){
      inputData(".pageFour",".pageThree","timeAvailable","30:00");
    });

    function inputData (pageIn,pageOut,key,data){
      userInput[key] = data;
      $(pageIn).delay(400).fadeIn(400);
      $(pageOut).fadeOut();
    }
  
});