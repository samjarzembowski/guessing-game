var one = document.getElementById('one');
var two = document.getElementById('two');
var three = document.getElementById('three');
var happy = document.getElementById('happy');
var questions = ['Was I born in Massachusetts?', 'Did I grow up in Illinois?', 'Do I volunteer at Woodland Park Zoo?'];
var answers = ["yes", "y"];

var correctAnswers = 0;
var user = prompt('Please enter your name:');
alert('Thank you, ' + user + '.  Press ok to play the Guessing Game!');

function ques1(){
	var question1 = prompt(questions[0]);
	var question1 = question1.toLowerCase();

	if (question1 === answers[0] || question1 === answers[1]) {
		one.innerHTML = 'Correct ' + user +'!  I was born in Massachusetts.';
		happy.innerHTML = '<img src="images/happyface.jpeg" />' ;
		correctAnswers++;
		} else {
		one.innerHTML = 'Sorry ' + user +'!  I was actually born in Massachusetts.';
		}
}


function ques2(){
	var question2 = prompt(questions[1]);
	var question2 = question2.toLowerCase();

	if (question2 === answers[0] || question2 === answers[1]) {
		two.innerHTML = 'Correct ' + user +'!  I did grow up in Illinois.';
		correctAnswers++;
		} else {
		two.innerHTML = 'Sorry ' + user +'!  I actually did grow up in Illinois.';
		}
}

function ques3(){
	var question3 = prompt(questions[2]);
	var question3 = question3.toLowerCase();

	if (question3 === answers[0] || question3 === answers[1]) {
		three.innerHTML = 'Correct ' + user +'!  I do volunteer at Woodland Park Zoo.';
		correctAnswers++;
		} else {
		three.innerHTML = 'Sorry ' + user +'!  I actually do volunteer at Woodland Park Zoo.';
		}
}

ques1();
ques2();
ques3();

alert('Thanks for playing, ' + user + '.  You had ' + correctAnswers + ' out of 3 correct answers!');

