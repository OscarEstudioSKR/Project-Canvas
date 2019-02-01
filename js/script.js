
//Autoinvocar JavaScript
(function(){

    crearObjetosCuadricula();
    generarObstaculos("Montaña", 200, "radial", "compacta");
    generarObstaculos("Montaña", 55, "radial", "compacta");
    generarObstaculos("Montaña", 150, "radial", "compacta");
    generarObstaculos("Montaña", 30, "radial", "compacta");

})()

setInterval("main()", fps); //Bucle



//Interior del bucle//////////////////

function main(){
    

    //Refrescar Canvas
    refrescarCanvas();
}


function crearObjetosCuadricula(){

    //Iniciar Casillas
    for(let i = 0 ; i < numCasillas[0] ; i++ ){
        for(let n = 0 ; n < numCasillas[1] ; n++ ){
            var nuevaCasilla = new Casilla (i*tamCasilla,n*tamCasilla);
            nuevaCasilla.dibujar()
            casillas.push(nuevaCasilla); 
    }}
}


function borrarCanvas(){
    context.clearRect(0,0,canvas.width,canvas.height);
}

function refrescarCanvas(){
    borrarCanvas();

    //Volver a dibujar cuadricula
    for(let i in casillas){
        casillas[i].dibujar();
    }


}

function generarObstaculos(tipo, tam, zona, union){
    let id = Math.floor(Math.random()*casillas.length-1);
    console.log("Montaña creada en: "+ id)

    for(let i=0;i<tam-1;i++){
        if(zona == "radial"){
                
            if(union == "compacta"){

                casillas[id].obstaculo = true;
                nuevoObstaculo(buscarIdPorDireccion(id, direccionRandom()), tipo);
                        
            }
        }
    }

}

function direccionRandom(){
    return Math.floor(Math.random()*4);
}

function buscarIdPorDireccion(inicial, direccion){
    let resultado = 0;
   if(direccion == 0){resultado = inicial - numCasillas[1];}
   if(direccion == 1){resultado = inicial + 1;}
   if(direccion == 2){resultado = inicial + numCasillas[1];}
   if(direccion == 3){resultado = inicial - 1;}
   
   if(resultado >= 0 && resultado <= casillas.length){
       return resultado;
   } else{
       return inicial;
      
   }
}

function comprobarObstaculo(id){
    if(id<0 || id > casillas.length){
        return true;
    }
    else{
        return casillas[id].obstaculo;}
    
}

function nuevoObstaculo(id, tipo){
    if(comprobarObstaculo(id) == false){
        casillas[id].cambiarTipo(tipo);
        console.log("Creado en:"+id);
    } else{ 
        otraBusqueda(id, tipo);
        console.log("No encuentra: "+id);
    }
}

function otraBusqueda(id, tipo){
    nuevoObstaculo(buscarIdPorDireccion(id, direccionRandom()), tipo);
}