//https://jsonplaceholder.typicode.com/

// buscar un usuario 
async function buscarUsuario(id){

    try{

        const response = await fetch(
            `https://jsonplaceholder.typicode.com/users/${id}`
        );

        const usuario = await response.json();

        console.log(usuario);

    }catch(error){

        console.log(error);

    }

}

buscarUsuario(3);


// mostrar la info ya sea de usuarios o publicaciones en una pagina html de los post (le podemos dar estilo a la pagina)
async function obtenerPosts(){

    const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
    );

    const posts = await response.json();

    const contenedor = document.getElementById("posts");

    posts.slice(0,10).forEach(post=>{

        contenedor.innerHTML += `

        <div class="post">

            <h2>${post.title}</h2>

            <p>${post.body}</p>

        </div>

        `;

    });

}


// enviar un usuario o publicación
async function crearPost(){

    try{

        const response = await fetch(
            "https://jsonplaceholder.typicode.com/posts",
            {

                method:"POST",

                headers:{
                    "Content-Type":"application/json"
                },

                body: JSON.stringify({

                    title:"Mi primer post",

                    body:"Hola mundo",

                    userId:1

                })

            }
        );

        const nuevoPost = await response.json();

        console.log(nuevoPost);

    }catch(error){

        console.log(error);

    }

}

crearPost();


//obtener todos los usuarios
async function obtenerUsuarios() {
    try{
        const response = await fetch('https://jsonplaceholder.typicode.com/posts')

        const posts = await response.json()
        posts.slice(0,5).forEach(post => {
            console.log(post.title);
        });

    } catch(error){ // error de llamado
        console.log(error)
    }
}

obtenerUsuarios();