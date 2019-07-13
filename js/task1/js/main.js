let fibUserChoice = prompt('Скільки наступних чисел ви хочете отримати?');
function* fib(n) {
    	var a = 0;
   		var b = 1;
   		let f = '';
   		if (confirm('Додатній ряд фібоначчі?')) {
			for (var i = 2; i <= n; i++) {
			    var c = a + b;
			    a = b;
			    b = c;
			    yield b;
			}
  } else {
  	    a = 0,
   		b = -1;
			for (var y = 2; y <= n; y++) {
			    c = a - (b);
			    a = b;
			    b = c;
			    yield b;
  }
}
}
	let fiboFin = fib(fibUserChoice);
	
	// console.log(fiboFin.next(100));


// 	for(let value of fiboFin) {
// 	  alert(value); 
// }
for (var d = 1; d <= fibUserChoice; d++) {
	fibUserChoice - 1;
	if(fibUserChoice > 1){
	console.log(fiboFin.next().value)
}
	else if(fibUserChoice== undefined){
		fibUserChoice = prompt('Скільки наступних чисел ви хочете отримати?');
	}
}



// prompt('Бажаєте продовжити і обрати наступних н чисел?')