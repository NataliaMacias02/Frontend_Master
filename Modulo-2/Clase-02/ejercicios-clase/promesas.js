/*
Las promesas tienen tres estados:
1. pending
2.fullfailed
3.rejected
*/

const promesa = new Promise((resolve, reject) => {
    const exito = true;

    if(exito) {
        resolve('La operación fue exitosa');
    }else {
        reject('Ocurrio un error')
    }
})

promesa.then((resultado) => {
    console.log(resultado);
}).catch((error) => {
    console.log(error);
})

