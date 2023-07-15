// Mi nombre
const miNombre = "Nicolás Tello";
console.log(miNombre);

//Edad
const edad = 22;
console.log(edad);

//Eres desallorador?
function eresDesarrollador(respuesta) {
    if (respuesta === "si") {
        console.log(true);
    } else {
        console.log(false);
    }
}
eresDesarrollador("si");

//Fecha de nacimiento
const fechaNacimiento = new Date ("July 29 2000");
console.log(fechaNacimiento);

//Libro favorito
const LibroFavorito ={
    Titulo: "Viaje al centro de la tierra",
    Autor: "Julio Verne",
    Fecha: 1864,
    Genero:"Novela",
    Url: "https://www.argentina.gob.ar/sites/default/files/verne_julio_-_viaje_al_centro_de_la_tierra.pdf",
}

console.log(LibroFavorito);