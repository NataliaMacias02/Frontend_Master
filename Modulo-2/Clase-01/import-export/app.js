/*
Problema: Supón que estás desarrollando una aplicación web que necesita organizar sus funcionalidades en diferentes módulos. Crea un módulo para las funciones de autenticación y otro para las operaciones de la base de datos. Usa import y export para integrarlos en la aplicación principal.
*/

import { login } from "./auth.js";
import { obtenerDatos } from "./db.js";

if (login('naty_mac', 1234)) {
    console.log('Login exitosos');
    console.log(obtenerDatos());
} else {
    console.log('Login faild')
}