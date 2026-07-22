fetch(url)
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });


async function obtenerInfo() {
    try{
        const response = await fetch('url');
        const users = await response.json()
    }catch(error){
        console.log(error);
    }
}

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