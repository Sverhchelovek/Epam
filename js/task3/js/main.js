// let inputNumber = document.querySelector('#inputNumber');
// let restartNumber = document.querySelector('#restartNumber');
// let inputNumbero = document.querySelector('#inputNumbero');
// let playerScore = document.querySelector('.playerScore');
// let computerScore = document.querySelector('.computerScore');

// let minNum = 1;
// let maxNum = 4;

// let randomNumber = function (min, max) {
//   let rand = min - 0.5 + Math.random() * (max - min + 1)
//   rand = Math.round(rand);
//   	return rand;
//   }
// let newNumber = randomNumber(minNum, maxNum);

// let counter = 1;

// inputNumbero.addEventListener('click', function() {

//  let myNumber = inputNumber.value;

//  if(newNumber == myNumber){
//     alert(`u won on ${counter} try`);
//    } else if (compNumber == newNumber) {
//       alert(`computer won on ${counter} try`);

//    } else if(myNumber > newNumber){
//       alert('need less number');
//       playerScore.innerText += ` | ` + inputNumber.value.toString() + ' | ';
//       computerScore.innerText += ` | ` + compNumber.toString() + ' | ';
//      counter += 1;

//    } else if(myNumber < newNumber){
//         alert('need bigger number');
//         playerScore.innerText += ` | ` + inputNumber.value.toString() + ' | ';
//         computerScore.innerText += ` | ` + compNumber.toString() + ' | ';
//        counter += 1;
//    }
// });

// 	restartNumber.addEventListener( 'click', function(){
// 		newNumber = randomNumber(minNum , maxNum);
// 		inputNumber.value = '';
//     counter = 1;
// 	});

//||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||//
//||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||//
//||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||//


let inputNumber   = document.querySelector('#inputNumber');
let restartGame   = document.querySelector('#restartNumber');
let inputNumbero  = document.querySelector('#inputNumbero');
let playerScore   = document.querySelector('.playerScore');
let computerScore = document.querySelector('.computerScore');
let message       = document.querySelector('.message');

let randomNumber  = function (min, max) {
  let rand = min - 0.5 + Math.random() * (max - min + 1)
      rand = Math.round(rand);
   return rand;
} 


let minNum, maxNum, myNumber, compMinNum, compMaxNum, compNumber;

restartGame.addEventListener( 'click', function(){



  

  minNum     = prompt('Введіть мінімальне число', 0);
  maxNum     = prompt('Введіть максимальне число', 100);
  compMinNum = parseInt(minNum);
  compMaxNum = parseInt(maxNum);
  compNumber = Math.round((compMinNum + compMaxNum) / 2)

  let newNumber = randomNumber(minNum , maxNum);

  inputNumber.value         = '';
  playerScore.textContent   = '';
  computerScore.textContent = '';
  message.innerText         = 'Enter the number!';
  counter                   = 1;

  // newNumber = randomNumber(minNum , maxNum);

  inputNumbero.addEventListener('click', function() {

    myNumber = parseInt(inputNumber.value);
    compNumber = Math.round((compMinNum + compMaxNum) / 2);

    // if (myNumber == newNumber && compNumber == newNumber) {
    //   message.innerText       = 'draw! Play gain.';
    //   playerScore.textContent   = ` | ${inputNumber.value} | `;
    //   computerScore.textContent = ` | ${compNumber} | `;
    // } 

    // else {

    //   if (myNumber == newNumber || compNumber == newNumber) {

    //     if(newNumber == myNumber) {
    //       message.innerText = `CONGRATULATIONS!!! YOU WON ON ${counter} TRY `;
    //       // playerScore.textContent += ` | ${inputNumber.value.toString()} | `;
    //       playerScore.textContent += ` | ${inputNumber.value} | `;

    //     } else {
    //       message.innerText = `computer won on ${counter} try `;
    //       computerScore.textContent += ` | ${compNumber} | `;
    //       computerScore.classList.add('computerScore_active');

    //     }

    //   } else {
    //     if(myNumber > newNumber) {
    //       message.innerText = `need less number `;
    //       playerScore.textContent += ` | ${inputNumber.value} | `;

    //     } else if (myNumber < newNumber) {
    //       message.innerText = `need bigger number `;
    //       playerScore.textContent += ` | ${inputNumber.value} | `;

    //     }

    //     if(compNumber > newNumber) {
    //       computerScore.textContent += ` | ${compNumber} | `;

    //       compMaxNum = compNumber;
    //       // compNumber = Math.round((compMinNum + compMaxNum) / 2);
    //     } else if(compNumber < newNumber) {
    //       computerScore.textContent += ` | ${compNumber} | `;
    //       compMinNum = compNumber;
    //       // compNumber = Math.round((compMinNum + compMaxNum) / 2);
    //     }
    //   }

    if (myNumber == newNumber && compNumber == newNumber) {
      message.innerText         = 'draw! Play gain.';
      playerScore.textContent   = ` | ${inputNumber.value} | `;
      computerScore.textContent = ` | ${compNumber} | `;
    } else {
        if(newNumber == myNumber){
          message.innerText = `CONGRATULATIONS!!! YOU WON ON ${counter} TRY `;
          // playerScore.innerText += ` | ` + inputNumber.value.toString() + ' | ';
          playerScore.textContent += ` | ${inputNumber.value} | `;
        } else if(myNumber > newNumber){
            message.innerText = `need less number `;
            // playerScore.innerText += ` | ${inputNumber.value} | `;
            playerScore.textContent += ` | ${inputNumber.value} | `;
        } else if(myNumber < newNumber){
            message.innerText = `need bigger number `;
            // playerScore.innerText += ` | ${inputNumber.value} | `;
            playerScore.textContent += ` | ${inputNumber.value} | `;
        }

        if(newNumber == compNumber){
          message.innerText = `computer won on ${counter} try `;
          // computerScore.innerText += ` | ` + compNumber + ' | ';
          computerScore.classList.add('computerScore_active');
          computerScore.textContent += ` | ${compNumber} | `;
        } else if(compNumber > newNumber){
            // computerScore.innerText += ` | ${compNumber} | `;
            computerScore.textContent += ` | ${compNumber} | `;
            compMaxNum = compNumber;
            // compNumber = Math.round((compMinNum + compMaxNum) / 2);
        } else if(compNumber < newNumber){
            // computerScore.innerText += ` | ${compNumber} | `;
            computerScore.textContent += ` | ${compNumber} | `;
            compMinNum = compNumber;
            // compNumber = Math.round((compMinNum + compMaxNum) / 2);
        }
    }


    // }





    counter += 1;
  });
 });




  	


 


