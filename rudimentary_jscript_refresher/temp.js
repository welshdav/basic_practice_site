const kelvin = 293; 
// base of kelvin
const celsius = 273; 
// base of celsius
var fahrenheit = celsius * (9 / 5) + 32; 
// formula for farenheit conversion
fahrenheit = Math.floor(fahrenheit); 
// rounds the decimal 
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`); 
