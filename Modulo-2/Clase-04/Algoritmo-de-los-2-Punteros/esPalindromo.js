function esPalindromo(palabra) {
    let inicio = 0;
    let final = palabra.length - 1;

    while(inicio < final) {
        if(palabra[inicio] !== palabra[final]) {
            return false; // si no coinciden, no es un palíndormo
        }
        inicio++;
        final--;
    }
    return true; // es palíndromo
}

console.log(esPalindromo("radar"));
console.log(esPalindromo("javascript"));
console.log(esPalindromo("abeja"));