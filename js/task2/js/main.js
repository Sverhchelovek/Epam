let inputNumber = document.querySelector('#inputNumber');
let restartNumber = document.querySelector('#restartNumber');
let inputNumbero = document.querySelector('#inputNumbero');

let randomNumber = function (min, max) {
let rand = min - 0.5 + Math.random() * (max - min + 1)
rand = Math.round(rand); 
	return rand;
  }
let newNumber = randomNumber(1, 100);
let counter = 1;

inputNumbero.addEventListener('click', function() {
 let myNumber = inputNumber.value;
 if(newNumber == myNumber){
    alert(`u won on ${counter} try`);
     console.log('u won on counter try');
   } else if(myNumber > newNumber){
       max = myNumber;
     alert('need less number');
     counter += 1;
   } else if(myNumber < newNumber){
       min = myNumber;
       alert('need bigger number');
       counter += 1;
   }
});

	restartNumber.addEventListener( 'click', function(){
		newNumber = randomNumber(1, 100);
		inputNumber.value = '';
    counter = 1;
	});




  	


 


