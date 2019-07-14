let min = 1;
let max = 100;

let myNumber;

function asd(){ // адекватно називати функці
	let value = document.getElementById('inputNumber').value;

	return value;
}
// asd();
// let myNumber = asd();

let randomNumber = function (min, max) {
var rand = min - 0.5 + Math.random() * (max - min + 1)
rand = Math.round(rand); 
	return rand;
  }

let newNumb = randomNumber(1, 100);
  	alert(newNumb);
  	alert(myNumber);
function newHere(newNumb){
  	if(newNumb === myNumber){
  	alert(newNumb);
  	alert(myNumber);
   	alert('u won')
   } else if(myNumber > newNumb){
  	alert(newNumb);
  	alert(myNumber);
   		max = myNumber;
   		alert(min, max);

   } else if(myNumber < newNumb){
  	alert(newNumb);
  	alert(myNumber);
   		min = myNumber;
   		alert(min, max);
   } 
}



 


