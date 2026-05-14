/*
Crea un programa en JavaScript que evalúe la nota de un estudiante y genere un mensaje personalizado basado en la nota. Las notas se asignan de la siguiente manera:

Si la nota es 90 o más, el estudiante aprueba con "Excelente".
Si la nota está entre 75 y 89, el estudiante aprueba con "Bien".
Si la nota está entre 60 y 74, el estudiante aprueba con "Suficiente".
Si la nota es menor de 60, el estudiante no aprueba.
*/

let nota = 45;

if (nota >= 90) { 
    console.log('Excelente tu nota es: ' + nota);
}else if (nota >= 75 && nota <= 89) {
    console.log('Bien tu nota es: ' + nota);
}else if (nota >= 60 && nota <= 74) {
    console.log('Suficiente tu nota es: ' + nota);
}else {
    console.log('No aprobado tu nota es: ' + nota);
}