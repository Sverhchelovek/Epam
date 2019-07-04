let fibUserChoice = prompt('Скільки наступних чисел ви хочете отримати?');
let fibDirection = confirm('Додатній ряд фібоначчі?');

function* fib(n) {
    	var a = 0;
   		var b = 1;
   		if (fibDirection = true) {
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
	
	for(let value of fiboFin) {
	  alert(value); 
}
