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
        this.vecinosIgual=[false,false,false,false,false,false,false,false];
        
        
    }

    dibujar(){

        this.vecinosPorContador();

        let id = this.vecinosIgual;
        if(id[0] == false && id[4] == false){ this.img = this.img4; }
        else if(id[0] == false){ this.img = this.img3; }
        else if(id[4] == false){ this.img = this.img2; }
        else{ this.img = this.img1; }

        context.drawImage(this.img,this.x,this.y,this.tam,this.tam);
        context.stroke();


        //context.font = "10px American Captain";
        //context.fillStyle="white";
        //context.fillText(this.x/tamCasilla+" : "+this.y/tamCasilla,this.x,this.y);
        //context.fillText(this.id,this.x,this.y+this.tam);

  
   
    }
    vecinosPorIdInversa(){

        if (this.id+1 < casillas.length && casillas[this.id+1].y == this.y&&
            casillas[this.id+1].tipo == this.tipo){
            this.vecinosIgual[2] = true;}

        if (this.id+1+numCasillas[0] < casillas.length && casillas[this.id+1+numCasillas[0]].y == this.y+tamCasilla
            &&casillas[this.id+1+numCasillas[0]].tipo == this.tipo){
            this.vecinosIgual[3] = true;}
        
        if (this.id+numCasillas[0] < casillas.length && casillas[this.id+numCasillas[0]].y == this.y+tamCasilla&&
            casillas[this.id+numCasillas[0]].tipo == this.tipo){
            this.vecinosIgual[4] = true;}
        
        if (this.id-1+numCasillas[0] < casillas.length && casillas[this.id-1+numCasillas[0]].y == this.y+tamCasilla&&
            casillas[this.id-1+numCasillas[0]].tipo == this.tipo){
            this.vecinosIgual[5] = true;}


    }
    vecinosPorContador(){


        if (this.id-1 >= 0 && casillas[this.id-1].y == this.y&&
            casillas[this.id-1].tipo == this.tipo){
            this.vecinosIgual[6] = true;}

        if (this.id-1-numCasillas[0] >= 0 && casillas[this.id-1-numCasillas[0]].y == this.y-tamCasilla&&
            casillas[this.id-1-numCasillas[0]].tipo == this.tipo){
            this.vecinosIgual[7] = true;}
        
        if (this.id-numCasillas[0] >= 0 && casillas[this.id-numCasillas[0]].y == this.y-tamCasilla&&
            casillas[this.id-numCasillas[0]].tipo == this.tipo){
            this.vecinosIgual[0] = true;}
        
        if (this.id+1-numCasillas[0] >= 0 && casillas[this.id+1-numCasillas[0]].y == this.y-tamCasilla&&
            casillas[this.id+1-numCasillas[0]].tipo == this.tipo){
            this.vecinosIgual[1] = true;}
    }


    cambiarTipo(nuevoTipo){
        this.tipo = nuevoTipo;
        this.obstaculo = true;

        if(this.tipo=="Tierra"){
            this.img1.src="/img/base00.png";
            this.img2.src="/img/base00.png";
            this.img3.src="/img/base00.png";
        }

        if(this.tipo=="Montaña"){
            this.img1.src="/img/montana00.png";
            this.img2.src="/img/montana01.png";
            this.img3.src="/img/montana00.png";
        }

        if(this.tipo=="Monte"){
            this.img1.src="/img/monte00.png";
            this.img2.src="/img/monte00.png";
            this.img3.src="/img/monte00.png";
            }

        if(this.tipo=="Lago"){
            this.img1.src="/img/lago00.png";
            this.img2.src="/img/lago00.png";
            this.img3.src="/img/lago00.png";
            }

        if(this.tipo=="Gran rio"){
            this.img1.src="/img/granrio00.png";
            this.img2.src="/img/granrio00.png";
            this.img3.src="/img/granrio00.png";
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