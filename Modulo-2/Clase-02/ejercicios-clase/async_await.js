
async function iniciar() {
    try {
        console.log('Cargando...')

        const respuesta = await fetch('https://rickandmortyapi.com/api/character'); 

        const datos = await respuesta.json();
        console.log(datos);
    } catch (error) {
        console.log(error);
    }
}
iniciar()

//setTimeOut

//setInterval - crear un contador del 1 al 5 y se detenga automaticamente

//function callback en la cual yo le pase un nombre y van a tener un mensaje de procesando y otro de finalizado