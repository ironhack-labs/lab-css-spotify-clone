![logo_ironhack_blue 7](https://user-images.githubusercontent.com/23629340/40541063-a07a0a8a-601a-11e8-91b5-2f13e4e6b441.png)

# LAB | HTML & CSS - Clon de Spotify

<details>
  <summary>
   <h2>Objetivos de aprendizaje</h2>
  </summary>

  Este ejercicio te permite practicar y aplicar los conceptos y técnicas enseñadas en clase.

  Al finalizar este ejercicio, serás capaz de:

  - Crear una página web basada en un diseño y recursos proporcionados.
  - Crear y enlazar una hoja de estilos CSS externa con un documento HTML.
  - Mostrar imágenes en una página web usando etiquetas HTML de imagen y la propiedad CSS `background`.
  - Usar la propiedad CSS `position` para posicionar elementos en una página web.
  - Usar Flexbox para diseñar y posicionar elementos en una página web.
  - Centrar contenido en una página web, incluidas imágenes y texto.
  - Entregar el trabajo terminado usando Git y GitHub mediante la creación de un Pull Request.

  <br>
  <hr>

</details>

## Introducción

A todo el mundo le gusta la música, ¿verdad? Así que probablemente hayas oído hablar de **Spotify**.

En este lab, vamos a crear una versión simplificada de la página de inicio de Spotify:

![Imagen de Spotify](https://i.imgur.com/xVD0bm6.jpg)

<br>

Todos los recursos e imágenes necesarios ya están incluidos. También puede resultarte útil consultar la **[versión completa en PDF de la web](https://s3-eu-west-1.amazonaws.com/ih-materials/uploads/spotify-prototype.pdf)** como referencia.

## Requisitos

- Hacer fork de este repositorio
- Clonar este repositorio

## Entrega

Al finalizar, ejecuta los siguientes comandos:

```shell
git add .
git commit -m "done"
git push origin master
```

Crea un Pull Request para que tus TAs puedan revisar tu trabajo.

## Instrucciones

Se te proporcionan algunos recursos: en la carpeta `images` encontrarás las imágenes necesarias, y el texto ya está listo en el archivo `index.html`. Escribe tu código HTML y CSS en los archivos `index.html` y `styles/style.css`, respectivamente. Recuerda seguir las mejores prácticas.

La página está dividida en 4 secciones y ¡nos hemos tomado la libertad de recortarlas en piezas!

En general, los diseños web no salen simplemente de la nada, así que probablemente tendrás mockups o bocetos que tendrás que integrar. Por ello, es una buena práctica dividir el sitio web en piezas antes de codificar para ayudarte a _**estructurar**_ tu HTML.

_**La última sección no está tan detallada como las demás, ¡buena suerte**_ :smile:

:muscle: :muscle: :muscle:
<br>
![](https://res.cloudinary.com/ihwebdeb/image/upload/v1571085836/Ironhack/spotify-prototype_1x_ahk8ep.jpg)

¡Manos a la obra!

### Iteración 1: Barra de navegación

- La barra de navegación debe tener `position: fixed`.
- Alinea el logotipo a la izquierda y la `ul` con los enlaces a la derecha, ya sea usando `float` o `flex`.

### Iteración 2: Imagen de fondo grande con texto

- Consulta [esta guía](https://css-tricks.com/centering-css-complete-guide/) sobre cómo centrar elementos.

### Iteración 3: Sección "What is on Spotify"

- Parece que los `div`s ocupan aproximadamente un tercio del contenedor cada uno. ¿Cómo puedes representarlo en código?

### Iteración 4: La sección verde

- Parece que tenemos 2 secciones principales: un elemento contenedor con el texto fluyendo de arriba a abajo y la imagen del reproductor de Spotify a la derecha.
- Posiciona el logotipo de Spotify de forma absoluta según el `div` verde.

<br>

**¡Feliz codificación!** :heart: