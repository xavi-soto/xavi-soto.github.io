document.addEventListener("DOMContentLoaded", function () {
    // El código JavaScript no es necesario para la animación de parpadeo en este ejemplo.
});


// Lista de nombres de imágenes para cambiar
const imagenesCambiables = ['images/patio1.png', 'images/patio2.png', 'images/patio3.png', 'images/patio4.png'];
let indiceImagen = 0;

// Función para cambiar la imagen cada 3 segundos (puedes ajustar el tiempo según tus necesidades)
function cambiarImagen() {
    const imagenCambiable = document.getElementById('imagenCambiable');
    imagenCambiable.src = imagenesCambiables[indiceImagen];

    // Incrementar el índice y reiniciar si alcanza el final de la lista
    indiceImagen = (indiceImagen + 1) % imagenesCambiables.length;
}

// Llamar a la función para iniciar el cambio de imagen al cargar la página
cambiarImagen(); // Cambia la imagen inmediatamente al cargar la página

// Configurar un intervalo para cambiar la imagen automáticamente cada 3 segundos
setInterval(cambiarImagen, 1000); // Cambia la imagen cada 3 segundos (3000 milisegundos)
