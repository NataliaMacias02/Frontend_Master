//Mostrar los cuadrados del 1 al 10

for(let num = 1; num <= 10; num++) {
    let cuadrado = num * num;
    console.log(num + "al cuadrado es: " + cuadrado)
} 
/* 

How does it work?
1. primero se declara una varaible, en este caso num, y le asignamos el valor de 1, que es el primer valor que queremos evaluar

2. despues establecemos la condicion del ciclo, en este caso num <= 10, lo que significa que el ciclo se va a ejecutar mientras num sea menor o igual a 10

3. establecemos el incremento, num++, esto hace que cada vez que el ciclo se ejecute num aumenta en 1

4. dentro del ciclo declaramos la variable cuadrado, que es el resultado de multiplicar num por si mismo, y finalmente lo imprimimos en consola 

*/