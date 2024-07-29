// I want kelvin to be an unchanging variable representing the value 293.
const kelvin = 300;
console.log(`The temperature is ${kelvin} degrees kelvin.`) // I made a console.log line of code for kelvin and celsius to replicate the results for fahrenheit just "for fun." 

// I want to create a variable called celsius, the value of which is the conversion of 293 kelvin to celsius (which is 273 less than kelvin.)
var celsius = kelvin - 273;
console.log(`The temperature is ${celsius} degrees celsius.`)

// I want to create a changeable variable called fahrenheit, the value of which is the conversion from 293 Kelvin to Fahrenheit using the conversion information from Kelvin to Celsius. I want to make it changeable to round down the resulting Fahrenheit conversion to a whole number.
let fahrenheit = Math.floor(celsius * (9/5) + 32);
console.log(`The temperature is ${fahrenheit} degrees fahrenheit.`)
