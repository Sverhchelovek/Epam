// var isNorm = confirm("Стандартний ряд Фібоначчі?");

// if (isNorm = true){
// 	function* fibo(start, end) {
//  		 for (let i = start; i <= end; i++) {
//     yield i;
//   }

// }
// } else if{

// }

// function* fibo(n){
// 	var a = 0,
// 	var b = 1;
// 	for (var i = 1; i <= n; i++) {
// 	var c = a + b;
// 	a = b;
// 	b = c;
// 	yield b;
// }
// 	console.log(yield b)
// }
		 
// let new = fibo(5);

// alert(new);


// let fiboFin = [...fibo(5)];

// alert fiboFin();

// //////////////////////////////////

// function* generateSequence(start, end) {

//   for (let i = start; i <= end; i++) {
//     yield i;
//   }

// }

// // Используем оператор … для преобразования итерируемого объекта в массив
// let sequence = [...generateSequence(2,5)];

// alert(sequence); // 2, 3, 4, 5













// console.log("hello");

// function fib(n){
// 	if (n != 1){
// 		n = fib(n-1) + fib(n-2)
// 		return n
// 	} else {
// 		return n
// 	}
// 	console.log(n);
// }

// fib(5);

alert( fib(3) ); // 2
// alert( fib(7) ); // 13

function* fib(n) {
	if(n != 1){
		n <= 1 ? n : fib(n - 1) + fib(n - 2)
		yield n;
}		else{
		yield n
} console.log(n)
	}


let fibFive = fib(5);

for(let value of fibFive) {
  alert(value); // 1, затем 2
}