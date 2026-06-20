// En un sistema de autenticación de usuarios, podrías usar una tabla hash para almacenar los pares de nombre de usuario y contraseña para realizar búsquedas rápidas.

let usuarios = new Map();

usuarios.set("juan123", "password123");
usuarios.set("anna456", "password456");

console.log(usuarios.get("juan123"));