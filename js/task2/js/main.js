let inputNumber = document.querySelector('#inputNumber');
let restartNumber = document.querySelector('#restartNumber');

let randomNumber = function (min, max) {
let rand = min - 0.5 + Math.random() * (max - min + 1)
rand = Math.round(rand); 
	return rand;
  }
let newNumber = randomNumber(1, 100);

inputNumbero.onclick = function() {
	let myNumber = inputNumber.value;
	if(newNumber === myNumber){
   	alert('u won');
   } else if(myNumber > newNumber){
   		max = myNumber;
    	alert('need less number');
   } else if(myNumber < newNumber){
   		min = myNumber;
   		alert('need bigger number');
   } 
};

	restartNumber.addEventListener( 'click', function(){
		newNumber = randomNumber(1, 100);
		inputNumber.value = '';
	});




  	


 


