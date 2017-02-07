
var userScore = 0;
var compScore = 0;
var winningScore = 3;


var compArr = ['Scissors', 'Rock', 'Paper'];
var scissors = compArr[0];
var rock = compArr[1];
var paper = compArr[2];
var result;
// Scoreboard
$('#you-score').text(userScore);
$('#comp-score').text(compScore);
	
// Computer's Turn
var rand = function(){
		var randomNum = Math.floor(Math.random()*3+1);
          if (randomNum === 1) {
            result = rock;
          }
          else if (randomNum === 2) {
            result = paper;
          }
          else {
            result = scissors;
          }
          return result;
      };



alert('Ready for a game? Click OK to start!')


// Select All Options(Rock, Paper or Scissors)
$('.rockBox').click( function(){
	var random = rand();
	alert('You selected Rock!');
	alert('The computer selected ' + random);

	if (random == rock){
		alert("It's a tie, try again!");
		if (userScore || compScore === winningScore){
			if (userScore === winningScore){
				alert('Congrats! You won!');
				userScore = 0;
				compScore = 0;
				$('#you-score').text(userScore);
				$('#comp-score').text(compScore);
			}
			else if (compScore === winningScore){
				alert('Sorry, you lost! Try again!')
				userScore = 0;
				compScore = 0;
				$('#you-score').text(userScore);
				$('#comp-score').text(compScore);
			}
			else {

			}
		}
	}
	else if (random == paper){
		alert("You loose! Try again!");
		compScore++;
		$('#comp-score').text(compScore);
		if (userScore || compScore === winningScore){
			if (userScore === winningScore){
				alert('Congrats, you won the game!');
				compScore = 0;
				userScore = 0;
				$('#you-score').text(userScore);
				$('#comp-score').text(compScore);
			}
			else if (compScore === winningScore){
				alert('Sorry, you lost the game. Try again!');
				compScore = 0;
				userScore = 0;
				$('#you-score').text(userScore);
				$('#comp-score').text(compScore);
			}
			else{

			}
		}
	}
	else {
		alert("You won!");
		userScore++;
		$('#you-score').text(userScore);
		if (userScore || compScore === winningScore){
			if (userScore === winningScore){
				alert('Congrats, you won!');
				compScore = 0;
				userScore = 0;
				$('#you-score').text(userScore);
				$('#comp-score').text(compScore);
			}
			else if (compScore === winningScore){
				alert('Sorry, you lost. Try again;');
				compScore = 0;
				userScore = 0;
				$('#you-score').text(userScore);
				$('#comp-score').text(compScore);
			}
			else {

			}
		}
}

});

$('.paperBox').click( function(){
	var random = rand();
	alert('You selected Paper!');
	alert('The computer selected ' + random);

	if (random == paper){
		alert("It's a tie! Try again!");
		if (userScore || compScore === winningScore){
			if (userScore === winningScore){
				alert('Congrats, you won!');
				compScore = 0;
				userScore = 0;
				$('#you-score').text(userScore);
				$('#comp-score').text(compScore);
			}
			else if (compScore === winningScore){
				alert('Sorry, you lost. Try again!');
				compScore = 0;
				userScore = 0;
				$('#you-score').text(userScore);
				$('#comp-score').text(compScore);
			}
			else {

			}
		}
	}
	else if (random == scissors){
		alert("You lost this time, try again");
		compScore++;
		$('#you-score').text(userScore);
		$('#comp-score').text(compScore);
		if (userScore || compScore === winningScore){
			if (userScore === winningScore){
				alert('Congrats, you won!');
				compScore = 0;
				userScore = 0;
				$('#you-score').text(userScore);
				$('#comp-score').text(compScore);
			}
			else if (compScore === winningScore){
				alert('Sorry, you lost. Try again;');
				compScore = 0;
				userScore = 0;
				$('#you-score').text(userScore);
				$('#comp-score').text(compScore);
			}
			else {

			}
			}
		}
	else {
		alert("You won!");
		userScore++;
		$('#you-score').text(userScore);
		if (userScore || compScore === winningScore){
			if (userScore === winningScore){
				alert('Congrats! You won the game!');
				userScore = 0;
				compScore = 0;
				$('#you-score').text(userScore);
				$('#comp-score').text(compScore);
			}
			else if (compScore === winningScore){
				alert('Sorry, you lost the game! Try again!')
				userScore = 0;
				compScore = 0;
				$('#you-score').text(userScore);
				$('#comp-score').text(compScore);
			}
			else {

			}
		}
	}
});

$('.scissorsBox').click( function(){
	var random = rand();
	alert('You selected Scissors!');
	alert('The computer selected ' + random);

	if (random == rock){
		alert("You lost this time! Try again!");
		compScore++;
		$('#you-score').text(userScore);
		$('#comp-score').text(compScore);
		if (userScore || compScore === winningScore){
			if (userScore === winningScore){
				alert('Congrats! You won!');
				userScore = 0;
				compScore = 0;
				$('#you-score').text(userScore);
				$('#comp-score').text(compScore);
			}
			else if (compScore === winningScore){
				alert('Sorry, you lost! Try again!')
				userScore = 0;
				compScore = 0;
				$('#you-score').text(userScore);
				$('#comp-score').text(compScore);
			}
			else {

			}
		}
	}
	else if (random == paper){
		alert("You won!");
		userScore++;
		$('#you-score').text(userScore);
		$('#comp-score').text(compScore);
		if (userScore || compScore === winningScore){
			if (userScore === winningScore){
				alert('Congrats, you won!');
				compScore = 0;
				userScore = 0;
				$('#you-score').text(userScore);
				$('#comp-score').text(compScore);
			}
			else if (compScore === winningScore){
				alert('Sorry, you lost. Try again!');
				compScore = 0;
				userScore = 0;
				$('#you-score').text(userScore);
				$('#comp-score').text(compScore);
			}
			else {

			}
		}
	}
	else {
		if (random == scissors){
		alert("It's a tie! Try again");
		$('#you-score').text(userScore);
		$('#comp-score').text(compScore);
		if (userScore || compScore === winningScore){
			if (userScore === winningScore){
				alert('Congrats, you won!');
				compScore = 0;
				userScore = 0;
				$('#you-score').text(userScore);
				$('#comp-score').text(compScore);
			}
			else if (compScore === winningScore){
				alert('Sorry, you lost. Try again;');
				compScore = 0;
				userScore = 0;
				$('#you-score').text(userScore);
				$('#comp-score').text(compScore);
			}
			else {

			}
		}
	}
}

});

//Select User Score Display

$('#you-score').click( function(){

});

//Select Comp Score Display

$('#comp-score').click( function(){

});














