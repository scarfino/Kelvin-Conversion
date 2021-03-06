/*
Temperature Conversion. Converts Kelvin to Fahrenheit and Newton
@scarfino 2018
*/

// set the forecast in kelvin
const kelvin = 300;

// celsius conversion, celsius is always 273 degrees less than kelvin
const celsius = kelvin - 273;

// farenheit calculation
let fahrenheit = celsius * (9 / 5) + 32;

// newton calculation
let newton = celsius * (33 / 100);

// round down fahrenheit calculation
fahrenheit = Math.floor(fahrenheit);

// round down newton calculation
newton = Math.floor(newton);

console.log(`The temperature is ${fahrenheit} degrees Fahrenheit, which is ${newton} on the Newton scale.`);
