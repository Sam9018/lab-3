'use strict';

alert('Hello you');
    var personsName = prompt('What is your name?');
    alert('Hi, ' + personsName );

var counter = 0

// Question 1 

var playGame = confirm('Do you want to play a game?');
console.log(playGame);
if (playGame) {
  var howOld = prompt('Am I old? Yes or No');
  var standardhowOld = howOld.toUpperCase();
  console.log(howOld);
  if (standardhowOld === "YES") {
    alert( 'Incorrect');
    } else {
    alert('Correct');
    }
}
                
    // Question 2    
    
    if (playGame) {
        var sports = prompt('Do I play sports? Yes or No');
        var standardSports = sports.toUpperCase();
        console.log(standardSports);
        if (standardSports === "YES") {
            alert( 'Yeah i do');
            counter++
        } else {
            alert('Got that wrong');
        }
        
    }
                    
    // Question 3

    if (playGame) {
        var drive = prompt('Do I drive to school? Yes or No');
        var standardDrive = drive.toUpperCase();
        console.log(standardDrive);
        if (standardDrive === "YES") {
            alert( 'Yeah i do');
            counter++
        } else {
            alert('Incorrect')
        }
        
    }

    // Question 4 
    
    if (playGame) {
        var hair = prompt('Do I have red hair? Yes or No');
        var standardHair = hair.toUpperCase();
        console.log(standardHair);
        if (standardHair === "YES") {
            alert( 'Correct');
            counter++
        } else {
            alert('Wrong pay more attention')
        }
        
    }
                    
    //Question 5
    
    if (playGame) {
        var classes = prompt('Am i taking classes? Yes or No');
        var standardClasses = classes.toUpperCase();
        console.log(standardClasses);
        if (standardSports === "YES") {
            alert( 'Yes i am');
            counter++
        } else {
            alert('Wrong i am taking classes')
        }
    } 

    // Question 6

    var water = prompt('how many cups of water did i drink today? You have 4 guesses');
    console.log(water);
    
    var guesses = 0;
    while  (guesses < 4) {
        guesses++
        if (playGame) {
            if (water >= "6") {
                water=prompt( 'Thats to many. Try again.');
                } else if (water <= "4") {
               water=prompt('More than that. Try again.');
                } else if (water == "5"){
                    alert ("that is right");
                    counter++
                    break;
                }
        
            }
    }

    //Question 7
                    
    var states = prompt(' What states have i lived in? You have 6 guesses.');
    console.log(states);

    var standardStates = states.toUpperCase();

    var stateArray = ["TEXAS", "VIRGINIA", "WASHINGTON"];

    for( var i = 0; i <stateArray.length; i++) {
        if ( standardStates === stateArray[i]) {
            alert ('You got it right.');
            counter++
            break;
        }
        else {
            alert ( 'You got it wrong. Try again.');
        }
    }

    if (playGame) {
        alert ( personsName + ' you got ' + counter + ' correct. Good job.')
    }