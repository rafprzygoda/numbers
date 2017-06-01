// Excercise 8.6
// isNaN method added 

var a = prompt("podaj liczbę");  
var b = prompt("podaj liczbę"); 
var number = (a * a) + (2 * a * b) - (b * b); 
console.log(number);

if (number > 0) {
	alert(number + 'liczba dodatnia');
} else if (number < 0) {
	alert(number + 'liczba ujemna');
} else if (number == isNaN(number)) {
	alert('zero');
} else {
	alert('nic');	
}