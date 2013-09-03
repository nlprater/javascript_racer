$(document).ready(function() {

  //Set default conditions at page load
  var turtleCounter = 0;
  var rabbitCounter = 0;
  var beginTime = '';
  var endTime = '';
  $("#turtle-wins p, #turtle-wins img, #turtle-wins form").hide();
  $("#rabbit-wins p, #rabbit-wins img, #rabbit-wins form").hide();
  //this is jQuery and makes sure the winner content is hidden to begin
  $(document).on('keyup',function(key){
    //also jQuery, this means to listen keys to be pressed
    
    if ( beginTime === '' ) {
      beginTime = new Date(); // get the starting time
    }

    if (turtleCounter < 11 && rabbitCounter < 11) {//if the race isn't finished
      switch(parseInt(key.which,10)) {

          case 65: // if the key pressed was "A"
            turtleCounter += 1
            //notch up the turtleCounter
            $('.turtle').removeClass();
            //jQuery to remove the turtle pic
            $('#' + turtleCounter).find("td").first().addClass('turtle');
            //jQuery to add the turtle pic back to the correct spot
            break;
          case 76: // if the key pressed was "L"
            rabbitCounter += 1
            //notch up the rabbitCounter
            $('.rabbit').removeClass();
            //jQuery to remove the rabbit pic
            $('#' + rabbitCounter).find("td").last().addClass('rabbit');
            //jQuery to add the rabbit pic bck to the correct spot
            break;
        };
    }
    else {//if the race is finished
      if ( endTime === '' ) {
        endTime = new Date(); //get the end time
        var finalTime = endTime - beginTime; //calc the timing
      } ;
      if(turtleCounter > 10 && turtleCounter < 12){//if the turtle won
        $(".winning-form input").first().attr("value",finalTime);//input the timing into a hidden input on the form
        $("#turtle-wins p, #turtle-wins img, #turtle-wins form").show();//show the winners form on the left
      }
      else if(rabbitCounter > 10 && rabbitCounter < 12){//if the rabbit won
        $(".winning-form input").last().attr("value",finalTime);//input the timing into a hidden input on the form
        $("#rabbit-wins p, #rabbit-wins img, #rabbit-wins form").show();//show the winners form on the right
      }
    }
  });
});
