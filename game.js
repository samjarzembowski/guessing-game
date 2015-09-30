var user = prompt('Please enter your name:');
alert('Thank you, ' + user + '.  Press ok to play the Guessing Game!')

var question1 = prompt('Was I born in Massachusetts?');

if (question1 === 'yes') {
  alert('Correct!  I was born in Massachusetts.');
} else {
  alert('Sorry!  I was actually born in Massachusetts.')
}

var question2 = prompt('Did I grow up in Illinois?');

if (question2 === 'yes') {
  alert('Correct!  I did grow up in Illinois.');
} else {
  alert('Sorry!  I actually did grow up in Illinois.');
}

var question3 = prompt('Do I volunteer at Woodland Park Zoo?');

if (question3 === 'yes') {
  alert('Correct!  I do volunteer at Woodland Park Zoo.');
} else {
  alert('Sorry!  I actually do volunteer at Woodland Park Zoo.');
}
