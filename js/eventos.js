
//Detectar entradas del teclado

function detectarTecla(event){
    console.log("Tecla: " +event.keyCode);

}

//Detectar entradas del ratón

function detectarRaton(event){
    //console.log("Codigo ratón: " +event.button);

    var idSelect = Math.floor(event.clientX/tamCasilla) + (Math.floor(event.clientY/tamCasilla)*numCasillas[0]);
    
    console.log("ID: "+ idSelect);
    console.log("Vecinos: "+casillas[idSelect].vecinosIgual[2]);
    console.log(
        " Tipo: "+casillas[idSelect].tipo
        +" Arriba: "+casillas[idSelect-numCasillas[0]].tipo);

}