$(document).ready(function(){
  console.log( "document loaded" );
    });
/*let faremer = {
  food: 9,
  love: 8,
  health: 3,
  exercise: 10,
};

let bussinesMan = {
  food: 4,
  love: 5,
  health: 10,
  exercise: 4,
};

let germanShepard = {
  food: -7,
  love: -8,
  health: -2,
  excercise: -6,
};

let chihuahua = {
  food: -2,
  love: -6,
  health: -10,
  excercise: -1,
};
function myFunction() {
    var x = document.getElementsByClassName('landingPage');
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}
*/
/*(".startGame" ).click(function() {
  $( ".landingPage" ).hide( "slow", function() {
    alert( "Animation complete." );
  });
});
*/

$('.game').hide();
$('.startGame').on('click',
  function() {
    $('.game, .landingPage').toggle(200);
  }
);

//variable with multiple objects and arrays to create the questionaire.

let questionaire = [{
  querstion: 'Do German Shepard need to be groomed a lot?',
  answers: ['true','false'],
  correctAnswer: 0
},{
  question: 'You must socialize and train your German Shepard from an early age to aboid behaivioral issues',
  answers: ['true','false'],
  correctAnswer: 0
},{
  question: 'German Shepards are great personal protection dogs',
  answers: ['true', 'false'],
  correctAnswer: 0
},{
  question: 'German Shepards are not suited for families with children',
  answers: ['true', 'false'],
  correctAnswer: 1
}
];
/*
http://api.jquery.com/hide/
*/

