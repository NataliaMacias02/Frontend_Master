const entrada = document.getElementById("entrada");
        const botonAdd = document.getElementById("botonAdd");
        const botonDelete = document.getElementById("botonDelete");
        const lista = document.getElementById("lista-comentarios");

        botonAdd.addEventListener("click", function(event) {
            event.preventDefault(); //prevenir que se recargue la pagina

            const texto = entrada.value.trim(); 
            if(texto === "") return; //en caso de agregar un comentario vacio 

            const nuevo = document.createElement("p"); //se crea un parrafo para agregar el comentario
            nuevo.textContent = texto; //agregar comentario
            lista.appendChild(nuevo); //agrega el comentario en la pagina
            entrada.value = " "; //limpia el input
        });

        botonDelete.addEventListener("click", function(event) {
            event.preventDefault();
            lista.innerHTML = ""; //elimina todos los comentarios
        })