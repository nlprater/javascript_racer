//Model=======================================================

function Player() {
  this.position = 0
};

function Race(player1,player2){
  this.player1 = player1
  this.player2 = player2
  this.beginTime = ''
  this.endTime = ''
  this.winner = ''
  this.finalTime = ''
};

// Player methods

Player.prototype.advance_player1 = function() {
  this.position += 1;
  //notch up the position of player
  $('.turtle').removeClass();
  //jQuery to remove the turtle pic
  $('#' + player1.position).find("td").first().addClass('turtle');
  //jQuery to add the turtle pic back to the correct spot
  };

Player.prototype.advance_player2 = function() {
  this.position += 1;
  //notch up the position of player
  $('.rabbit').removeClass();
  //jQuery to remove the rabbit pic
  $('#' + player2.position).find("td").last().addClass('rabbit');
  //jQuery to add the rabbit pic bck to the correct spot
  };


// Race methods

Race.prototype.player1_wins = function() {
  $(".winning-form input").first().attr("value",this.finalTime);
  //input the timing into a hidden input on the form
  $("#turtle-wins p, #turtle-wins img, #turtle-wins form").show();
  //show the winners form on the left
};

Race.prototype.player2_wins = function() {
  $(".winning-form input").last().attr("value",this.finalTime);
  //input the timing into a hidden input on the form
  $("#rabbit-wins p, #rabbit-wins img, #rabbit-wins form").show();
  //show the winners form on the right
};


//Controller==================================================

$(document).ready(function(){
  //Set default conditions at page load
  player1 = new Player;
  player2 = new Player;
  race = new Race(player1,player2);
  $("#turtle-wins p, #turtle-wins img, #turtle-wins form").hide();
  $("#rabbit-wins p, #rabbit-wins img, #rabbit-wins form").hide();
  //this is jQuery and makes sure the winner content is hidden to begin
  $(document).on('keyup',function(key){
    //also jQuery, this means to listen keys to be pressed
    if (race.beginTime === '') {
    race.beginTime = new Date(); // get the starting time
    console.log(race.beginTime);
    }
    if (player1.position < 11 && player2.position < 11) {//if the race isn't finished
      switch(parseInt(key.which,10)) {
          
          case 65: // if the key pressed was "A"
            console.log("I'm in the game!");
            player1.advance_player1();
            break;
          case 76: // if the key pressed was "L"
            player2.advance_player2();
            break;
        };
    }
    else {//if the race is finished
      race.endTime = new Date(); //get the end time
      if(player1.position > 10 && player1.position < 12){//if the turtle won
        race.winner = player1;
        race.finalTime = race.endTime - race.beginTime;
        race.player1_wins();
      }
      else if(player2.position > 10 && player2.position < 12){//if the rabbit won
        race.winner = player2;
        race.finalTime = race.endTime - race.beginTime;
        race.player2_wins();
      }
    }
  });
});





