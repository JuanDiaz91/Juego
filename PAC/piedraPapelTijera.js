// Este array no se puede modificar,
var posibilidades = ["piedra", "papel", "tijera"];

//Coloco las imagenes en variables constantes
const piedraJugador = document.getElementsByTagName('img')[0];
const papelJugador = document.getElementsByTagName('img')[1];
const tijeraJugador = document.getElementsByTagName('img')[2];

const piedraOrdenador = document.getElementsByTagName('img')[3];
const papelOrdenador = document.getElementsByTagName('img')[3];
const tijeraOrdenador = document.getElementsByTagName('img')[3];
const defecto = document.getElementsByTagName('img')[3];

//creo una variable boton que hace referencia al primer button(JUGAR) y le asigno el evento para realizar las comprobaciones
var boton = document.getElementsByTagName('button')[0];
boton.addEventListener('click', compruebaNombre);
boton.addEventListener('click', numPartidas);
boton.addEventListener('click', imgCambio);

//Creo una funcion para comprobar el nombre del jugador
function compruebaNombre(nombreUsuario) {
    nombreUsuario = document.getElementsByTagName('input')[0].value;
    
    if((nombreUsuario == null) || (nombreUsuario.length <= 3)){
        document.getElementsByTagName('input')[0].classList.add("fondoRojo");
        
    
    
    }else if (!isNaN(nombreUsuario[0])) {
        console.log("incorrecto");
        document.getElementsByTagName('input')[0].classList.add("fondoRojo");
        
        
    } else {
        document.getElementsByTagName('input')[0].classList.remove("fondoRojo");
        console.log("correcto");
        document.getElementsByTagName('input')[0].disabled = true;
        
    }
}
var numPart;
function numPartidas() {//función para validar el numero de partidas a jugar
    numPart = document.getElementsByTagName('input')[1].value;
    if (numPart <= 0) {
        document.getElementsByTagName('input')[1].classList.add("fondoRojo");
        console.log("incorrecto");
    } else {
        document.getElementsByTagName('input')[1].classList.remove("fondoRojo");
        document.getElementById('total').innerHTML=numPart;
        numPart.readOnly = true;
        document.getElementsByTagName('input')[1].disabled = true;// si los campos son correcto desactivamos el campo
    }   
}

function imgCambio(){// con esta función cambiamos las imagenes que aparecen por defecto por las del juego (manos de mickey) cuando se haga click en el boton jugar.
    piedraJugador.src = 'img/piedraJugador.png';
    papelJugador.src = 'img/papelJugador.png';
    tijeraJugador.src = 'img/tijeraJugador.png';
}

papelJugador.onclick = function() {//con estas funciones seleccionamos la imagen que querramos utilizar al jugar la partida y las vinculamos con la eleccion del jugador.
    eleccionUsuario = posibilidades[1];
    papelJugador.classList.add('seleccionado');
    papelJugador.classList.remove('noSeleccionado');
    piedraJugador.classList.remove('seleccionado');
    piedraJugador.classList.add('noSeleccionado');
    tijeraJugador.classList.remove('seleccionado');
    tijeraJugador.classList.add('noSeleccionado');
    console.log('Jugador elije ' + posibilidades[1]);
}

tijeraJugador.onclick = function() {
    eleccionUsuario = posibilidades[2];
    tijeraJugador.classList.add('seleccionado');
    tijeraJugador.classList.remove('noSeleccionado');
    piedraJugador.classList.remove('seleccionado');
    piedraJugador.classList.add('noSeleccionado');
    papelJugador.classList.remove('seleccionado');
    papelJugador.classList.add('noSeleccionado');
    console.log('Jugador elije ' + posibilidades[2]);
}

piedraJugador.onclick = function() {
    eleccionUsuario = posibilidades[0];
    piedraJugador.classList.add('seleccionado');
    piedraJugador.classList.remove('noSeleccionado');
    papelJugador.classList.remove('seleccionado');
    papelJugador.classList.add('noSeleccionado');
    tijeraJugador.classList.remove('seleccionado');
    tijeraJugador.classList.add('noSeleccionado');
    console.log('Jugador elije ' + posibilidades[0]);
}

//Creamos otra variable para el siguiente button (YA) y le asignamos el evento que permita realizar la tirada.
var boton2 = document.getElementsByTagName('button')[1];
boton2.addEventListener('click', partida);
var numActual=0;//creamos esta variable que representa la partida actual como contador.

function partida(){//con esta funcion jugaremos la partida
    numActual++//sumamos una al contador de la partida actual
    var tiraMaq = aleatorio(posibilidades);//para la tirada maquina llamamos a la función aleatorio y le pasamos el array posibilidades.
    var nombreUsuario = document.getElementsByTagName('input')[0].value;
    
    if (numActual<=numPart) {//comienzan las condiciones. mientras el total de partidas actuales sean menores o igual al total de partidas
        if (eleccionUsuario ==posibilidades[0]) {//creamos if para cada una de las elecciones del jugador en el caso de que elijamos piedra. 
            if (tiraMaq ==0) {//todas las opciones de la maquina
            console.log('El ordenador elije ' + posibilidades[0]);
            console.log('Empate!');
            document.getElementById('historial').innerHTML += "<li>Empate</li>";//Añadimos al historial de la partida el resultado de cada mano
            piedraOrdenador.src="img/piedraOrdenador.png";//Añadimos la imagen de la mano que a elegido la máquina
            } else if (tiraMaq ==1) {
            console.log('El ordenador elije ' + posibilidades[1]);
            console.log('Gana la máquina!');
            papelOrdenador.src="img/papelOrdenador.png";
            document.getElementById('historial').innerHTML += "<li>Gana Ordenador</li>";
            }else {
                console.log('El ordenador elije ' + posibilidades[2]);
                console.log('Gana Jugador!');
                tijeraOrdenador.src="img/tijeraOrdenador.png";
                document.getElementById('historial').innerHTML += "<li>Gana " + nombreUsuario + "</li>";
            }
        }
        if (eleccionUsuario == posibilidades[1]) {// para el caso en el cual elijamos papel
            if (tiraMaq ==0) {
                console.log('El ordenador elije ' + posibilidades[0]);
                console.log('Gana jugador!');
                document.getElementById('historial').innerHTML += "<li>Gana " + nombreUsuario + "</li>";
                piedraOrdenador.src="img/piedraOrdenador.png";
            } else if (tiraMaq ==1) {
                console.log('El ordenador elije ' + posibilidades[1]);
                console.log('Empate!');
                document.getElementById('historial').innerHTML += "<li>Empate</li>";
                papelOrdenador.src="img/papelOrdenador.png";
            }else {
                console.log('El ordenador elije ' + posibilidades[2]);
                console.log('Gana la máquina!');
                tijeraOrdenador.src="img/tijeraOrdenador.png";
                document.getElementById('historial').innerHTML += "<li>Gana Ordenador</li>";
            }
        }
        if (eleccionUsuario == posibilidades[2]) {//para el caso en el que elijamos tijera
            if (tiraMaq ==0) {
                console.log('El ordenador elije ' + posibilidades[0]);
                console.log('Gana la máquina!');
                piedraOrdenador.src="img/piedraOrdenador.png";
                document.getElementById('historial').innerHTML += "<li>Gana Ordenador</li>";
            } else if (tiraMaq ==1) {
                console.log('El ordenador elije ' + posibilidades[1]);
                console.log('Gana jugador!');
                papelOrdenador.src="img/papelOrdenador.png";
                document.getElementById('historial').innerHTML += "<li>Gana " + nombreUsuario + "</li>";
            }else {
                console.log('El ordenador elije ' + posibilidades[2]);
                console.log('Empate!');
                tijeraOrdenador.src="img/tijeraOrdenador.png";
                document.getElementById('historial').innerHTML += "<li>Empate</li>";
            }
        }
    } else {// cuando las partidas actuales alcanzan a las totales quitamos el evento a la variable boton2 
        boton2.removeEventListener;       
        console.log('End Game!!');
        numActual = numPart;
    }
    document.getElementById('actual').innerHTML=numActual;   
}

function aleatorio() {//Creamos esta función para que determine de manera aleatoria la eleccion de la maquina le pasamos por parametro el array posibilidades
    var numero = Math.floor(Math.random() * 3);
    return numero;
}

////Creamos otra variable para el siguiente button (RESET) y le asignamos el evento que permita resetear la partida.
var boton3 = document.getElementsByTagName('button')[2];
boton3.addEventListener('click', reset);

function reset() {//Creamos la función reset para resetear la partida
    document.getElementById('historial').innerHTML += "<li>Nueva Partida</li>";//Reseteamos los valores y añadimos al historial nueva partida
    document.getElementsByTagName('input')[1].value = 0;
    document.getElementById('actual').innerHTML=0;
    document.getElementById('total').innerHTML=0;
    numActual = 0;
    numPart = 0;
    defecto.src = "img/defecto.png";//Añadimos la img por defecto para que no se visualize la ultima tirada de la máquina
    document.getElementsByTagName('input')[1].disabled=false;//reactivamos los campos para volver añadir el numero de partidas o cambiar el nombre
    document.getElementsByTagName('input')[0].disabled=false;
}
//    //

