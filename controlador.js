//Consumo del servicio de spotify para traer canciones de un artista


//DEFINIR LA VARIABLE PARA RECIBIR LA ETIQUETA DE IMG1
let titulo1 = document.getElementById("titulo1");
let titulo2 = document.getElementById("titulo2");
let titulo3 = document.getElementById("titulo3");
let imagen1 = document.getElementById("imagen1");
let imagen2 = document.getElementById("imagen2");
let imagen3 = document.getElementById("imagen3");
let audio1 = document.getElementById("audio1");
let audio2 = document.getElementById("audio2");
let audio3 = document.getElementById("audio3");

//1. Definir la URL del servicio
let url = "https://api.spotify.com/v1/artists/6lYSDSFhJyUV6CtNix2fBA/top-tracks?country=ES";

//2. Definir el token o permiso de acceso
let token = "Bearer BQBfPURIJbZ9LQmVFx8bcDpuEWu3MvT-7wERxoCHy9GkzliT5bPAwElrT-VlzQSJeEJpVsSy-IvgbXIb89tEzyBZ-V1_v4B9rYRlLCxvpoH2QFBAdOj3SERq1Oq_DBNrNyuCxosARMGi_SFigScmoEcvMHHlsGE";

//3. Definir Objeto AJAX
let objetoAJAX = new XMLHttpRequest();

//4. Abrir la conexion
objetoAJAX.open('GET', url, true);

//5. Crear encabezado de conexion
objetoAJAX.setRequestHeader('Authorization', token);

//6. Cargamos los datos del servicio
objetoAJAX.onload = function() {
    let respuesta = JSON.parse(this.responseText);

    console.log(respuesta);
    titulo1.textContent = respuesta.tracks[0].album.name;
    titulo2.textContent = respuesta.tracks[3].album.name;
    titulo3.textContent = respuesta.tracks[2].album.name;
    imagen1.src = respuesta.tracks[0].album.images[0].url;
    imagen2.src = respuesta.tracks[3].album.images[0].url;
    imagen3.src = respuesta.tracks[2].album.images[0].url;
    audio1.src = respuesta.tracks[0].preview_url;
    audio2.src = respuesta.tracks[3].preview_url;
    audio3.src = respuesta.tracks[2].preview_url;
}

//7. Enviamos la peticion
objetoAJAX.send();    