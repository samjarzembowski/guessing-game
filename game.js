var correctAnswers = 0;
var user = prompt('Please enter your name:');
alert('Thank you, ' + user + '.  Press ok to play the Guessing Game!');

var question1 = prompt('Was I born in Massachusetts?');
var question1 = question1.toLowerCase();

if (question1 === 'yes' || question1 === 'y') {
  alert('Correct ' + user +'!  I was born in Massachusetts.');
  correctAnswers++;
} else {
  alert('Sorry ' + user +'!  I was actually born in Massachusetts.');
}


var question2 = prompt('Did I grow up in Illinois?');
var question2 = question2.toLowerCase();

if (question2 === 'yes' || question2 === 'y') {
  alert('Correct ' + user +'!  I did grow up in Illinois.');
  correctAnswers++;
} else {
  alert('Sorry ' + user +'!  I actually did grow up in Illinois.');
}


var question3 = prompt('Do I volunteer at Woodland Park Zoo?');
var question3 = question3.toLowerCase();

if (question3 === 'yes' || question3 === 'y') {
  alert('Correct ' + user +'!  I do volunteer at Woodland Park Zoo.');
  correctAnswers++
} else {
  alert('Sorry ' + user +'!  I actually do volunteer at Woodland Park Zoo.');
}


alert('Thanks for playing, ' + user + '.  You had ' + correctAnswers + ' out of 3 correct answers!');
