function addCarta(nContenedor) {
    
    var carta = document.createElement("div");
    var contenedor = document.getElementsByClassName("contenedor");
    contenedor = contenedor[nContenedor];
    contenedor.insertBefore(carta, contenedor.childNodes[0]);
    
    var palos = ["corazon-", "picas-", "diamante-", "trebol-"];
    var palo = getRandomInt(0, 4);
    var valor = getRandomInt(0, 13);    
    palo = palos[palo];
    
    carta.className += "carta ";
    carta.className += palo;
    carta.className += valor;
    carta.id = valor;
}
    
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function repartir() {
    addCarta(0);
    addCarta(0);
    addCarta(1);
    addCarta(1);
}

function sumar(jugador) {
    var cartas = document.getElementsByClassName("contenedor");
    cartas = cartas[jugador];
    cartas = cartas.getElementsByClassName("carta");
    var suma = 0;
    var valor;
    
    for (var i = 0; i < cartas.length ; i++) {
        valor = parseInt(cartas[i].id);
        if (valor > 10) {valor = 10;}
        if (valor == 1) { valor = 11;}
        suma += valor;
    }
    return suma;
}

function ganador() {
    var jugador1 = sumar(0);
    var jugador2 = sumar(1);
    var nodoJugador1 = document.getElementsByTagName("h2");
    var nodoJugador2 = nodoJugador1[1];
    nodoJugador1 = nodoJugador1[0];
    var contenidoJugador1 = parseInt(nodoJugador1.textContent);
    var contenidoJugador2 = parseInt(nodoJugador2.textContent);
    
    
    if( jugador2 > jugador1 && jugador2 <= 21) {
        contenidoJugador1 -= 10;
        contenidoJugador2 += 10;
    }
    
    else {
        contenidoJugador1 += 10;
        contenidoJugador2 -= 10;
    }
    
    nodoJugador1.textContent = contenidoJugador1;
    nodoJugador2.textContent = contenidoJugador2;
    
}