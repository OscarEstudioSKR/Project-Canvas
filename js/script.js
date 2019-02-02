
//Autoinvocar JavaScript
(function(){
    crearObjetosCuadricula();
    generarMudo();
})()

 //Bucle
setInterval("main()", fps);

//Interior del bucle
function main(){ 
    refrescarCanvas();

}

function crearObjetosCuadricula(){

    //Iniciar Casillas
    let cont = 0
    for(let i = 0 ; i < numCasillas[1] ; i++ ){
        for(let n = 0 ; n < numCasillas[0] ; n++ ){         
            var nuevaCasilla = new Casilla (cont,n*tamCasilla,i*tamCasilla);
            casillas.push(nuevaCasilla); 
            cont++;
    }}
}

function borrarCanvas(){
    context.clearRect(0,0,canvas.width,canvas.height);
}

function refrescarCanvas(){
    borrarCanvas();
  
    //Buscar los vecinos en array descendiente
    for(let n = casillas.length-1; n > 0; n--){
        casillas[n].vecinosPorIdInversa();
    }

    //Volver a dibujar cuadricula
    casillas.map((i)=>i.dibujar());
}

function generarObstaculos(bioma, tam, zona, union){
    let id = Math.floor(Math.random()*casillas.length);

    for(let i=0;i<tam;i++){
        if(zona == "radial"){     
            if(union == "compacta"){
                nuevoObstaculo(buscarIdPorDireccion(id, direccionRandom()), bioma);           
            }
            if(union == "fluida"){
                nuevoObstaculo(buscarIdPorDireccion(id, direccionRandom(),15), bioma);           
            }
        }
        if(zona == "lineal"){     
            if(union == "compacta"){
                id = buscarIdPorDireccion(id, direccionRandom());
                nuevoObstaculo(id, bioma);           
            }
            if(union == "fluida"){
                id = buscarIdPorDireccion(id, direccionRandom(),5);
                nuevoObstaculo(id, bioma);           
            }
        }
    }
}

function direccionRandom(){
    return Math.floor(Math.random()*8);
}

function buscarIdPorDireccion(inicial, direccion, pasos=1){
    let resultado = 0;
    if (pasos != 1){
        pasos = Math.floor(Math.random()*pasos);
    }
 
   if(direccion == 0){resultado = inicial - (numCasillas[0]*pasos);}
   else if(direccion == 1){resultado = inicial - (numCasillas[0]*pasos);}
   else if(direccion == 2){resultado = inicial + pasos;}
   else if(direccion == 3){resultado = inicial + (numCasillas[0]*pasos);}
   else if(direccion == 4){resultado = inicial + (numCasillas[0]*pasos);}
   else if(direccion == 5){resultado = inicial + (numCasillas[0]*pasos);}
   else if(direccion == 6){resultado = inicial - pasos;}
   else if(direccion == 7){resultado = inicial - (numCasillas[0]*pasos);}
   else{console.log("Fallo en direcciones posibles!!!");}
   
   if(resultado >= 0 && resultado < casillas.length){
       return resultado;
   } else{
       return inicial; 
   }
}

function comprobarObstaculo(id){
    if(id<0 || id > casillas.length){
        return true;
    }else{
        return casillas[id].obstaculo;}   
}
/*
function nuevoObstaculo(id, bioma){
        if(comprobarObstaculo(id) == false){
            casillas[id].cambiarTipo(bioma);
        } else{ 
            otraBusqueda(id, bioma);
        }   
}*/

function nuevoObstaculo(id, bioma){
    let posicionado = false;

    while (posicionado == false) {
        if(comprobarObstaculo(id) == false){
            casillas[id].cambiarTipo(bioma);
            posicionado = true;
        }
        id = buscarIdPorDireccion(id, direccionRandom());
    }
}

/*
function otraBusqueda(id, bioma){
    nuevoObstaculo(buscarIdPorDireccion(id, direccionRandom()), bioma);
}
*/
function generarMudo(){
    let tamPlaneta = casillas.length;
    let restoTam = tamPlaneta;

    while(restoTam>0){
        let idBioma = Math.floor(Math.random()*biomasList.length)
        let bioma = biomasList[idBioma];
        let tamTemp = 0;

        if(bioma.maxTam<restoTam){
            tamTemp = Math.floor(Math.random()*bioma.maxTam);
            restoTam -= tamTemp;
        }else{
            restoTam -= restoTam;
            tamTemp= 0;
        }     
        generarObstaculos(bioma, tamTemp, bioma.tipoZona, bioma.tipoUnion);
    }
}