![logo_ironhack_blue 7](https://user-images.githubusercontent.com/23629340/40541063-a07a0a8a-601a-11e8-91b5-2f13e4e6b441.png)

# LAB | HTML & CSS - Clon de Spotify

## Introducción

A todo el mundo le gusta la música, ¿verdad? Lo más probable es que, si te gusta, hayas oído hablar de **Spotify**.

En este laboratorio, construiremos una versión simplificada de la página de aterrizaje de Spotify:

![Spotify image](https://i.imgur.com/xVD0bm6.jpg)

<br/>

Todos los activos e imágenes necesarios ya están incluidos. También puede resultarte útil recurrir a la **[versión completa en PDF de la](https://s3-eu-west-1.amazonaws.com/ih-materials/uploads/spotify-prototype.pdf)** página como referencia.

## Requisitos

- Haz un fork de este repo
- Clona este repositorio

## La presentación

Al terminar, ejecuta los siguientes comandos:

```shell
$ git add .
$ git commit -m "done"
$ git push origin master
```

Cree una solicitud de extracción para que sus tutores puedan comprobar su trabajo.

## Instrucciones

Se te proporcionan algunos activos: en la carpeta de `images`, encontrarás las imágenes necesarias, y el texto está listo para ti en el archivo `index.html`. Escribe tu código HTML y CSS en los archivos `index.html` y `styles/style.css`, respectivamente. Recuerda seguir las mejores prácticas.

La página está dividida en 4 secciones, ¡y la hemos cortado generosamente en trozos!

En general, los diseños de sitios web no salen de la nada, así que lo más probable es que tengas maquetas/bocetos que tendrás que integrar. Es una buena práctica para ayudarte antes de codificar a cortar el sitio web en pedazos con el fin de ayudarte a _**estructurar**_ tu HTML.

_**La última sección no es tan detallada como las otras, buena suerte**_ :smile:

:muscle: :muscle: :muscle:<br/>![](https://res.cloudinary.com/ihwebdeb/image/upload/v1571085836/Ironhack/spotify-prototype_1x_ahk8ep.jpg)

¡Hagamos esto!

### Iteración 1: Barra de navegación

- La barra de navegación debe estar en `posición: fixed`.
- Alinear el logo a la izquierda y la `ul` con los enlaces a la derecha, ya sea usando `float` o `flex`.

### Iteración 2: Fondo de imagen grande con texto

- Consulta [esta guía](https://css-tricks.com/centering-css-complete-guide/) sobre cómo centrar las cosas.

### Iteración 3: Sección "¿Qué hay en Spotify?

- Parece que los `divs` ocupan aproximadamente un tercio del contenedor cada uno. ¿Cómo se puede representar esto en el código?

### Iteración 4: La sección verde

- Parece que tenemos 2 secciones principales, un elemento contenedor con el texto que fluye de arriba a abajo, y la imagen del reproductor de Spotify a la derecha.
- Coloca el logotipo de Spotify absolutamente de acuerdo con el `div` _verde_.

¡Feliz codificación! :heart: