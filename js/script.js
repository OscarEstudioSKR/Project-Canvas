

//Detectar entradas del ratón y mouse
function detectarTecla(event){
    console.log("Tecla: " +event.keyCode);
}
function detectarRaton(event){
    console.log("Codigo ratón: " +event.button);
}

//Autoinvocar JavaScript
(function(){
    iniciarCuadricula();
    console.log("Cuadricula creada");

})()

//Bucle
setInterval("main()", fps);

//Interior del bucle
function main(){
    console.log("Fps")

    //Refrescar Canvas
    //context.clearRect(0,0,canvas.width,canvas.heigh);
}


function iniciarCuadricula(){
    for(let i = 0 ; i < numCasillas[0] ; i++ ){
        for(let n = 0 ; n < numCasillas[1] ; n++ ){
            var nuevaCasilla = new Casilla (i*tamCasilla,n*tamCasilla);
            nuevaCasilla.dibujar()
            casillas.push(nuevaCasilla);    
    }}
}





function dibujarCasilla(x,y){
    context.strokeStyle = "#fff";
    context.lineWidth = .1;
    context.strokeRect(x, y, tamCasilla-1, tamCasilla-1);
}
