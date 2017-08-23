//business logic

function Player(name) {
  this.name = name;
  this.tempScore=0;
  this.totalScore=0;
}
Player.prototype.Pass= function(tempScore) {
  this.totalScore = this.totalScore + tempScore;
  tempScore=0;
  alert("Next Player");
  $("#player1").toggleClass("hidden");
  $("#player2").toggleClass("hidden");
}

//method
rollit = function (){
  return Math.floor((Math.random() * 6) + 1);
}

$(document).ready(function() {
  tempScore=0;
  $('#players').submit(function() {
    event.preventDefault();
    name1=$("#name1").val();
    name2=$("#name2").val();
    player1=new Player(name1);
    player2=new Player(name2);
    $("#players").addClass("hidden");
    $("#player1").removeClass("hidden");
});

$("#rollem").click(function() {
rolled=rollit();
if(rolled===1){
  tempScore=0;
  player1.Pass(tempScore);
  alert("you rolled a 1 sucker!");
} else {
  tempScore=tempScore+rolled
  console.log(tempScore);
  console.log(player1);
}

});
$("#rollem2").click(function() {
rolled=rollit();
if(rolled===1){
  tempScore=0
  player2.Pass(tempScore);
  alert("you rolled a 1 sucker!");
} else {
  tempScore=tempScore+rolled
  console.log(tempScore);
  console.log(player2);
}

});
rolled=rollit();
console.log(tempScore);



$("#pass").click(function() {
// $("#player1").toggleClass("hidden");
// $("#player2").toggleClass("hidden");
player1.Pass(tempScore);
tempScore = 0;
console.log(player1);
});
$("#pass2").click(function() {
$("#player1").toggleClass("hidden");
$("#player2").toggleClass("hidden");
player2.Pass(tempScore);
tempScore = 0;
console.log(player2);
});
});
