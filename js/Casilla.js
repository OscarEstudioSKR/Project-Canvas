class Casilla {
    constructor(x,y){
        this.x = x;
        this.y = y;
        this.tam = tamCasilla;
        console.log("creado");
        
    }

    dibujar(){
        context.strokeStyle = "#fff";
        context.lineWidth = .1;
        context.strokeRect( this.x,  this.y, this.tam-1, this.tam-1); 
    }

}