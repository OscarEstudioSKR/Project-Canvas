class Casilla {
    constructor(id,x,y){
        this.id = id;
        this.x = x;
        this.y = y;
        this.tam = tamCasilla;
        this.obstaculo = false;
        this.tipo = "Tierra base";  
        this.img = new Image;
        this.img1 = new Image;
        this.img2 = new Image;
        this.img3 = new Image;
        this.img4 = new Image;
        //this.img4 = new Image;
        this.img.src="/img/base00.png";
        this.img1.src="/img/base00.png";
        this.img2.src="/img/base00.png";
        this.img3.src="/img/base00.png";
        this.img4.src="/img/base00.png";
        this.vecinosTipo=["","","","","","","",""];
        
    }

    dibujar(){

        this.vecinosPorContador();

        if(this.vecinoTipoIgual(0) == false && this.vecinoTipoIgual(4) == false){ this.img = this.img4; }
        else if(this.vecinoTipoIgual(0) == false){ this.img = this.img3; }
        else if(this.vecinoTipoIgual(4) == false){ this.img = this.img2; }
        else{ this.img = this.img1; }
        
        




        context.drawImage(this.img,this.x,this.y,this.tam,this.tam);
        context.stroke();


        //context.font = "10px American Captain";
        //context.fillStyle="white";
        //context.fillText(this.x/tamCasilla+" : "+this.y/tamCasilla,this.x,this.y);
        //context.fillText(this.id,this.x,this.y+this.tam);

  
   
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


    vecinoTipoIgual(pos){
        if(this.vecinosTipo[pos] == this.tipo){
            return true;
        } else{ return false;}
    }

    cambiarTipo(nuevoTipo){
        this.tipo = nuevoTipo;
        this.obstaculo = true;

        if(this.tipo=="Tierra"){
            this.img1.src="/img/base00.png";
            this.img2.src="/img/base00.png";
            this.img3.src="/img/base00.png";
            this.img4.src="/img/base00.png";
        }

        if(this.tipo=="Montaña"){
            this.img1.src="/img/montana00.png";
            this.img2.src="/img/montana01.png";
            this.img3.src="/img/montana02.png";
            this.img4.src="/img/montana03.png";
        }

        if(this.tipo=="Monte"){
            this.img1.src="/img/monte00.png";
            this.img2.src="/img/monte01.png";
            this.img3.src="/img/monte02.png";
            this.img4.src="/img/monte03.png";
            }

        if(this.tipo=="Lago"){
            this.img1.src="/img/lago00.png";
            this.img2.src="/img/lago01.png";
            this.img3.src="/img/lago02.png";
            this.img4.src="/img/lago03.png";
            }

        if(this.tipo=="Gran rio"){
            this.img1.src="/img/granrio00.png";
            this.img2.src="/img/granrio01.png";
            this.img3.src="/img/granrio02.png";
            this.img4.src="/img/granrio03.png";
        }
        
        if(this.tipo=="Rio"){
            this.img1.src="/img/agua00.png";
            this.img2.src="/img/agua01.png";
            this.img3.src="/img/agua02.png";
            this.img4.src="/img/agua03.png";

        }
        this.img = this.img1;

    }

}