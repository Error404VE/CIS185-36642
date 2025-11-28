// Problem 1: Temperature Converter Suite
function celsiusToFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}

function fahrenheitToCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5/9;
}

function getTemperatureDescription(fahrenheit) {
    if (fahrenheit < 32) return "Freezing";
    if (fahrenheit <= 50) return "Cold";
    if (fahrenheit <= 70) return "Cool";
    if (fahrenheit <= 85) return "Warm";
    return "Hot";
}

// Basic console tests
console.group('Problem 1 Tests');
console.log('celsiusToFahrenheit(0) =>', celsiusToFahrenheit(0));
console.log('celsiusToFahrenheit(100) =>', celsiusToFahrenheit(100));
console.log('celsiusToFahrenheit(-40) =>', celsiusToFahrenheit(-40));
console.log('fahrenheitToCelsius(32) =>', fahrenheitToCelsius(32));
console.log('fahrenheitToCelsius(68) =>', fahrenheitToCelsius(68));
console.log('fahrenheitToCelsius(212) =>', fahrenheitToCelsius(212));
console.log('getTemperatureDescription(25) =>', getTemperatureDescription(25));
console.log('getTemperatureDescription(75) =>', getTemperatureDescription(75));
console.log('getTemperatureDescription(95) =>', getTemperatureDescription(95));
console.groupEnd();
