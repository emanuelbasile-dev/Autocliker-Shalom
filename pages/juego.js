let tiempoInactivo;

let monedas = 0;

let monedasPorClick = 1;

let monedasPorSegundo = 0;

let costoCursor = 10;

let costoAuto = 50;

let nivel = 1;

let experiencia = 0;

let experienciaNecesaria = 100;

const monedasTexto = document.getElementById("monedas");
const porClickTexto = document.getElementById("porClick");
const porSegundoTexto = document.getElementById("porSegundo");

const costoCursorTexto = document.getElementById("costoCursor");
const costoAutoTexto = document.getElementById("costoAuto");

const boton = document.getElementById("botonClick");



function comprarCursor(){

    if(monedas >= costoCursor){

        monedas -= costoCursor;

        monedasPorClick++;

        costoCursor = Math.floor(costoCursor*1.5);

        actualizar();

    }

}

function comprarAuto(){

    if(monedas >= costoAuto){

        monedas -= costoAuto;

        monedasPorSegundo++;

        costoAuto = Math.floor(costoAuto*1.8);

        actualizar();

    }

}


setInterval(()=>{

    monedas += monedasPorSegundo;

    actualizar();

},1000);

boton.addEventListener("click",()=>{

    monedas += monedasPorClick;

    experiencia++;

    revisarNivel();

    actualizar();

    reiniciarTemporizador();
});


function revisarNivel(){

    if(experiencia >= experienciaNecesaria){

        experiencia = 0;

        nivel++;

        monedas += 200;

        experienciaNecesaria = Math.floor(experienciaNecesaria * 1.4);

    }

}



function actualizar(){

    monedasTexto.textContent = Math.floor(monedas);

    porClickTexto.textContent = monedasPorClick;

    porSegundoTexto.textContent = monedasPorSegundo;

    costoCursorTexto.textContent = costoCursor;

    costoAutoTexto.textContent = costoAuto;

    document.getElementById("nivel").textContent = nivel;

    document.getElementById("xpActual").textContent = experiencia;

    document.getElementById("xpNecesaria").textContent = experienciaNecesaria;

    document.getElementById("xp").style.width =
        (experiencia / experienciaNecesaria) * 100 + "%";
}

const fondo = document.getElementById("fondo");

function reiniciarTemporizador(){

    clearTimeout(tiempoInactivo);

    fondo.style.opacity = "0.9";

    fondo.style.backgroundImage = 'url("/clase/trabajoJV/assets/lets-start-a-tel-aviv-impressed-chain-ill-start-v0-u4mevzewd8ig1.webp")';

    tiempoInactivo = setTimeout(() => {

        fondo.style.opacity = "3";

        setTimeout(() => {

            fondo.style.backgroundImage = 'url("/clase/trabajoJV/assets/TelAvivDepressed.jpg")';

            fondo.style.opacity = "0.9";

        },800);

    },10000);

}

actualizar();
reiniciarTemporizador();