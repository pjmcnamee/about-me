'use strict';

// Get the user's name

// Ask them five y/n questions

var userName = prompt(' Hi...... What is your name?');

// alert('Sucks to have you here, ' + userName + '. I have to ask you some questions about me for some strange reason. They are all simple yes or no questions so you should be able to do this hopefully. Answer with yes/no or y/n.')

// var answerOne = prompt('Do i have a dog?').toLowerCase();

// console.log('They were asked if i have a dog and answered with ' +answerOne);

// if (answerOne == 'y' || answerOne == 'yes') {
//     alert('Woooo you can answer a yes or no question correctly!');
// } else {
//     alert('Wrong');
// }

// var answerTwo = prompt('Do I really know what im doing with this coding thing?').toLowerCase();

// console.log('They were asked do i know what im doing with this coding thing and answered with ' +answerTwo);

// if (answerTwo == 'n' || answerTwo == 'no') {
//     alert('Yeahhhh you right unfortunatly :(.');
// } else {
//     alert('I wish I really did.');
// }

// var answerThree = prompt('Do i like Pizza?').toLowerCase();

// if (answerThree == 'y' || answerThree == 'yes') {
//     alert('Hey you\'re not totally hopeless!');
// } else {
//     alert('You\'re hopeless.....');
// }

// var answerFour = prompt('Do i like spicey food?').toLowerCase();

// console.log('They were asked do i like spicey food and answered with ' + answerFour);

// if (answerFour == 'y' || answerFour == 'yes') {
//     alert('No! I hate spicey food!')
// } else {
//     alert('Correct Spicey food is nasty')
// }

// var answerFive = prompt('Have i always lived in Washington?').toLowerCase();

// console.log('They were asked If i have always lived in Washington and answered with ' + answerFive);

// if (answerFive == 'y' || answerFive == 'yes') {
//     alert('Correct! Who would ever want to not live here?!');
// } else {
//     alert('Wrong! I have always lived in Washington');
// }

// Question 6 - Done

// var tries = 4;
// var upperLimit = 50;
// var lowerLimit = 0;
// var message = 'Try and guess my favorite number between 1 and 50! You have only 4 tries!';
// var answer = 12
// var guess = '';

// while (tries > 0) {
//    guess = prompt(message, guess);

//    if (guess == null){
//        alert('Quitting Game now.')
//        break;
//    } else if(isFinite(guess) && guess != ''){
//     guess = +guess;
//    } if (guess < lowerLimit){
//        //if guess < limi
//        alert('Your guess should be higher than ' + lowerLimit + '.');
//    } else if (guess > upperLimit){
//        alert('Your guess should be lower than ' + upperLimit + '.')
//    } else if (guess < answer) {
//        alert('Your answer is too low!')
//    } else if (guess > answer){
//        alert('Your answer is too high!')
//    } else if (guess === 12) {
//        alert('Im amazed you guessed it right in 4 tries!!!! You are amazing!')
//        break;
//    }

//    tries = tries - 1;

//  if (tries == 0 ) {
//      alert('You ran out of tries! The number was ' + answer + '.')
//  }
// }

// Question 7 - done


// var favoriteFoods = ['pizza', 'ice cream', 'french toast', 'chicken tika masala', 'eggs', 'chicken', 'toast', 'burrito'];
// var foodQuestion = 'Alright ' + userName + '. What my top 8 favorite foods are! You have 8 total guesses to guess the top 8! See how well you do!';
// var foodGuess = '';
// var foodTries = 8;
// var foodScore = 0;

// while (foodTries > 0) {
//     foodGuess = prompt(foodQuestion, foodGuess);
//     console.log(foodGuess);
//     if(foodGuess === null){
//         alert('Quitting the game!')
//         break;
//     }
//     if (favoriteFoods[0] === foodGuess.toLowerCase()){
//         alert('Well that was an easy one! Who doesnt love pizza!')
//         foodScore = foodScore + 1;
//     } else if (favoriteFoods[1] === foodGuess.toLowerCase()){
//         alert('Really who doesnt love ice cream?! Crazy people you cant trust is who. But yes it is one of the top 8!')
//         foodScore = foodScore + 1;
//     } else if (favoriteFoods[2] === foodGuess.toLowerCase()) {
//         alert('French toast is indeed one of my favorite foods!')
//         foodScore = foodScore + 1;
//     } else if (favoriteFoods[3] === foodGuess.toLowerCase()) {
//         alert('Wow that is super impressive to guess! Im blown away you got it!')
//         foodScore = foodScore + 1;
//     } else if (favoriteFoods[4] === foodGuess.toLowerCase()) {
//         alert('Yes i do love eggs!')
//         foodScore = foodScore + 1;
//     } else if (favoriteFoods[5] === foodGuess.toLowerCase()) {
//         alert('Chicken is indeed one of my favorite foods!')
//         foodScore = foodScore + 1;
//     } else if (favoriteFoods[6] === foodGuess.toLowerCase()) {
//         alert('I do love a good piece of toast!')
//         foodScore = foodScore + 1;
//     } else if (favoriteFoods[7] === foodGuess.toLowerCase()) {
//         alert('A burrito is amazing! One of my top 8 for sure!')
//         foodScore = foodScore + 1;
//     } else {
//         alert('That is not one of my favorite foods!')
//     }

//     foodTries = foodTries - 1;

//     if (foodTries == 0) {
//         alert('You ran out of tries!')
//     }
// }

// alert('Congratz ' + userName + 'You got ' + foodScore + ' out of 8!');


// Stretch goal for 6 -Done

// var tries = 4;
// var upperLimit = 50;
// var lowerLimit = 0;
// var message = 'Alright ' + userName + '. Try and guess my favorite number between 1 and 50! You have only 4 tries!';
// var answer = Math.floor(Math.random() * (upperLimit - lowerLimit + 1)) + lowerLimit;
// var guess = '';

// while (tries > 0) {
//    guess = prompt(message, guess);

//    if (guess == null){
//        alert('Quitting Game now.')
//        break;
//    } else if(isFinite(guess) && guess != ''){
//     guess = +guess;
//    } if (guess < lowerLimit){
//        alert('Your guess should be higher than ' + lowerLimit + '.');
//    } else if (guess > upperLimit){
//        alert('Your guess should be lower than ' + upperLimit + '.')
//    } else if (guess < answer) {
//        alert('Your answer is too low!')
//    } else if (guess > answer){
//        alert('Your answer is too high!')
//    } else if (guess === answer) {
//        alert('Im amazed you guessed it right in 4 tries!!!! You are amazing!')
//        break;
//    }

//    tries = tries - 1;

//  if (tries == 0 ) {
//      alert('You ran out of tries! The number was ' + answer + '.')
//  }
// }





// Stretch goal for 7 ----- its broked right meow

var favoriteFoods = ['pizza', 'ice cream', 'french toast', 'chicken tika masala', 'eggs', 'chicken', 'toast', 'burrito'];
var foodQuestion = 'Alright ' + userName + '. What my top 8 favorite foods are! You have 8 total guesses to guess the top 8! See how well you do!';
var foodGuess = '';
var foodTries = 8;
var foodScore = 0;


while (foodTries > 0) {
  foodGuess = prompt(foodQuestion, foodGuess);
  var rightAnswer = false;
  console.log(foodGuess.toLowerCase);
  if(foodGuess === null){
    alert('Quitting the game!');
    break;
  }

  for (var i = 0; i < favoriteFoods.length; i++) {
    if (foodGuess.toLowerCase() === favoriteFoods[i]){
      alert('Correct!');
      rightAnswer = true;
      foodScore++;
    }
  }
  if (!rightAnswer){
    alert('Wrong');
  }
  foodTries--;
}

alert('Gratz you got ' + foodScore + ' out of 8.');