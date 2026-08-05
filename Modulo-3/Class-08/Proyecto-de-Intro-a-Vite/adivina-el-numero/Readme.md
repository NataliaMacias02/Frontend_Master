# 🎯 Adivina el número — Taller Vite + Vanilla JS

Proyecto del taller "Crea tu propio Adivina el número con Vite", siguiendo la guía de:
https://gist.github.com/heladio-devf-mx/f2e47f90fce7a56873d6ab94c076224b

## Cómo ejecutar el proyecto

1. Descomprime/copia esta carpeta en tu equipo.
2. Abre una terminal dentro de la carpeta `adivina-el-numero`.
3. Instala las dependencias:

   ```bash
   npm install
   ```

4. Inicia el servidor de desarrollo:

   ```bash
   npm run dev
   ```

5. Vite te mostrará una URL local (normalmente `http://localhost:5173`). Ábrela en tu navegador y ¡a jugar!

## Estructura del proyecto

```
adivina-el-numero/
├── index.html      # Estructura HTML del juego
├── main.js         # Lógica del juego (ES Modules, eventos, DOM)
├── style.css        # Estilos del juego
├── package.json     # Configuración del proyecto y dependencias
└── README.md
```

## Cómo funciona

- Al cargar la página, `main.js` genera un número aleatorio secreto entre 1 y 100.
- El jugador escribe un número y presiona **Adivinar** (o **Enter**).
- El juego indica si el número es más alto o más bajo, y muestra una pista de
  "temperatura" (🔥 muy caliente / 🌤️ tibio / ❄️ frío) según qué tan cerca estés.
- Se cuentan los intentos realizados.

## Funcionalidades extra agregadas

Además de los pasos base del taller, se añadieron:

1. **Contador de intentos** visible en pantalla.
2. **Pistas de "frío/caliente"** basadas en la distancia al número secreto.
3. **Adivinar con la tecla Enter**, no solo con el botón.
4. **Botón "Jugar de nuevo"** que reinicia el juego con un nuevo número secreto.
5. **Mejor puntaje persistente** usando `localStorage`: guarda el menor número
   de intentos con el que has ganado, incluso si recargas la página.

## Posibles retos adicionales

- Agregar un límite máximo de intentos (por ejemplo, 10) y mostrar "Perdiste" si se agotan.
- Agregar un temporizador que mida cuánto tiempo tardas en adivinar.
- Permitir elegir el rango de números (por ejemplo, 1–500) antes de empezar.
- Guardar un historial de partidas con `localStorage`.h