// Weather: Kelvin --> Celsius --> Fahrenheit
const kelvin = 283;
console.log(kelvin);

let celsius = kelvin - 273;
console.log(celsius);

let fahrenheit = celsius * (9 / 5) + 32;
console.log(fahrenheit);

fahrenheit = Math.floor(fahrenheit);
console.log(fahrenheit);
console.log(The temperature is ${ fahrenheit } degrees Fahrenheit.);

let newton = celsius * (33 / 100);
newton = Math.floor(newton);
console.log(The temperature is ${ newton } degress Newton.);