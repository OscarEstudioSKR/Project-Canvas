class Casilla {
    constructor(x,y){
        this.x = x;
        this.y = y;
        this.tam = tamCasilla;
        this.obstaculo = false;
        this.tipo = "Vacio";
        
    }

    dibujar(){

        if(this.obstaculo == true){
            context.fillStyle = colorRojo;
            context.fillRect( this.x,  this.y, this.tam-1, this.tam-1); 
        }else{
            context.fillStyle = "black";
            context.fillRect( this.x,  this.y, this.tam-1, this.tam-1);
        }
        
    }

    cambiarTipo(nuevoTipo){
        this.tipo = nuevoTipo;
        this.obstaculo = true;

    }

}