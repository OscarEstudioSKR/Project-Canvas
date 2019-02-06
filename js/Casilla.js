class Casilla {
    constructor(id,x,y){
        this.id = id;
        this.x = x;
        this.y = y;
        this.tam = tamCasilla;
        this.obstaculo = false;
        this.tipo = "Tierra base"; 

        this.img = new Image;
        this.imaNom = "base";
        this.img.src="";
        

        this.vecinosTipo=["","","","","","","",""];
        
    }

    dibujar(){
        
        if(this.tipo != "Vacío"){

            //Buscar los vecinos en array ascendente
            this.vecinosPorContador();
            
            //Cambiar imagen dependiendo de los vecinos
            this.img.src = "./img/"+this.imaNom+"00.png";
            
            if(this.vecinoTipoIgual(0) == false && this.vecinoTipoIgual(4) == false){ 
                this.img.src = "./img/"+this.imaNom+"03.png";}
            else if(this.vecinoTipoIgual(0) == false){ 
                this.img.src = "./img/"+this.imaNom+"02.png"; }
            else if(this.vecinoTipoIgual(4) == false){ 
                this.img.src = "./img/"+this.imaNom+"01.png"; }

            //Pintar imagen
            context.drawImage(this.img,this.x,this.y,this.tam,this.tam);
            context.stroke();

            //context.font = "10px American Captain";
            //context.fillStyle="white";
            //context.fillText(this.x/tamCasilla+" : "+this.y/tamCasilla,this.x,this.y);
            //context.fillText(this.id,this.x,this.y+this.tam);
        }
    }

    vecinosPorIdInversa(){

        if (this.id+1 < casillas.length && casillas[this.id+1].y == this.y){
            this.vecinosTipo[2] = casillas[this.id+1].tipo;}

        if (this.id+1+numCasillas[0] < casillas.length && casillas[this.id+1+numCasillas[0]].y == this.y+tamCasilla){
            this.vecinosTipo[3] = casillas[this.id+1+numCasillas[0]].tipo;}
        
        if (this.id+numCasillas[0] < casillas.length && casillas[this.id+numCasillas[0]].y == this.y+tamCasilla){
            this.vecinosTipo[4] = casillas[this.id+numCasillas[0]].tipo;}
        
        if (this.id-1+numCasillas[0] < casillas.length && casillas[this.id-1+numCasillas[0]].y == this.y+tamCasilla){
            this.vecinosTipo[5] = casillas[this.id-1+numCasillas[0]].tipo;}
    }

    vecinosPorContador(){

        if (this.id-1 >= 0 && casillas[this.id-1].y == this.y){
            this.vecinosTipo[6] = casillas[this.id-1].tipo;}

        if (this.id-1-numCasillas[0] >= 0 && casillas[this.id-1-numCasillas[0]].y == this.y-tamCasilla){
            this.vecinosTipo[7] = casillas[this.id-1-numCasillas[0]].tipo;}
        
        if (this.id-numCasillas[0] >= 0 && casillas[this.id-numCasillas[0]].y == this.y-tamCasilla){
            this.vecinosTipo[0] = casillas[this.id-numCasillas[0]].tipo;}
        
        if (this.id+1-numCasillas[0] >= 0 && casillas[this.id+1-numCasillas[0]].y == this.y-tamCasilla){
            this.vecinosTipo[1] = casillas[this.id+1-numCasillas[0]].tipo;}
    }


    vecinoTipoIgual(pos, tipo = this.tipo){
        if(this.vecinosTipo[pos] == tipo){
            return true;
        } else{ return false;}
    }

    cambiarTipo(bioma){
        this.tipo = bioma.tipo;
        this.imaNom = bioma.imaNom;
        this.obstaculo = true;
        this.img.src = "./img/"+this.imaNom+"00.png";
        
    }

}
