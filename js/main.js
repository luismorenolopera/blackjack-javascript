

function agregarCarta(nContenedor) {
    var carta = document.createElement("div");
    var contenedor = document.getElementsByClassName("contenedor");
    contenedor = contenedor[0];
    contenedor.insertBefore(carta, contenedor.childNodes[0]);
}