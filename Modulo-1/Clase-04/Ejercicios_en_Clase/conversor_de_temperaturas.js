//  Crea una función que convierta temperaturas entre grados Celsius y Fahrenheit.
// celsiusAFahrenheit debe tomar una temperatura en Celsius y devolver la temperatura equivalente en Fahrenheit.
//fahrenheitACelsius debe tomar una temperatura en Fahrenheit y devolver la temperatura equivalente en Celsius.

function celsiusAFahrenheit(celsius) {
    let fahrenheit = (1.8 * celsius) +32;
    return fahrenheit;
}
let resultadoF = celsiusAFahrenheit(40);
console.log("La temperatura en fahrenheit es: " + resultadoF);


function fahrenheitACelsius(farhenheit) {
    let celsius = (farhenheit - 32) / 1.8;
    return celsius;
}
let resultadoC = fahrenheitACelsius(120);
console.log("La temperatura en celcius es: " + resultadoC);