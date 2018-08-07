'use strict';

// Get the user's name

// Ask them five y/n questions

var userName = prompt(' Hi...... What is your name?');

alert('Sucks to have you here, ' + userName + '. I have to ask you some questions about me for some strange reason. They are all simple yes or no questions so you should be able to do this hopefully. Answer with yes/no or y/n.')

var answerOne = prompt('Do i have a dog?').toLowerCase();

console.log('They were asked if i have a dog and answered with ' +answerOne);

if (answerOne == 'y' || answerOne == 'yes') {
    alert('Woooo you can answer a yes or no question correctly!');
} else {
    alert('Wrong');
}

var answerTwo = prompt('Do I really know what im doing with this coding thing?').toLowerCase();

console.log('They were asked do i know what im doing with this coding thing and answered with ' +answerTwo);

if (answerTwo == 'n' || answerTwo == 'no') {
    alert('Yeahhhh you right unfortunatly :(.');
} else {
    alert('I wish I really did.');
}

var answerThree = prompt('Do i like Pizza?').toLowerCase();

if (answerThree == 'y' || answerThree == 'yes') {
    alert('Hey you\'re not totally hopeless!');
} else {
    alert('You\'re hopeless.....');
}

var answerFour = prompt('Do i like spicey food?').toLowerCase();

console.log('They were asked do i like spicey food and answered with ' + answerFour);

if (answerFour == 'y' || answerFour == 'yes') {
    alert('No! I hate spicey food!')
} else {
    alert('Correct Spicey food is nasty')
}

var answerFive = prompt('Have i always lived in Washington?').toLowerCase();

console.log('They were asked If i have always lived in Washington and answered with ' + answerFive);

if (answerFive == 'y' || answerFive == 'yes') {
    alert('Correct! Who would ever want to not live here?!');
} else {
    alert('Wrong! I have always lived in Washington');
}


