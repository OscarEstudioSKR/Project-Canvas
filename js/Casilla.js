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
        this.img.src="/img/base00.png";
        this.img1.src="/img/base00.png";
        this.img2.src="/img/base00.png";
        
        
    }

    dibujar(){

        context.drawImage(this.img,this.x,this.y,this.tam,this.tam);
        context.stroke();
        //context.font = "5px American Captain";
        //context.fillStyle="white";
        //context.fillText(this.id,this.x,this.y);

   
    }

    imagenPorVecinos(){
        let vecinoInferior = this.id+numCasillas[0];

        if(vecinoInferior > 0 && vecinoInferior < casillas.length){

            if(this.tipo == casillas[vecinoInferior].tipo){
                this.img = this.img1;
            }else{
                this.img = this.img2; 
            }
        }
    }

    cambiarTipo(nuevoTipo){
        this.tipo = nuevoTipo;
        this.obstaculo = true;

        if(this.tipo=="Tierra base"){
            this.img1.src="/img/base00.png";
            this.img2.src="/img/base00.png";
        }

        if(this.tipo=="Montaña1"){
            this.img1.src="/img/montana00.png";
            this.img2.src="/img/montana01.png";
        }

        if(this.tipo=="Montaña2"){
            this.img1.src="/img/monte00.png";
            this.img2.src="/img/monte00.png";
            }

        if(this.tipo=="Lago"){
            this.img1.src="/img/lago00.png";
            this.img2.src="/img/lago01.png";
            }

        if(this.tipo=="Gran rio"){
            this.img1.src="/img/granrio00.png";
            this.img2.src="/img/granrio00.png";}
        
        if(this.tipo=="Lago"){
            this.img1.src="/img/agua00.png";
            this.img2.src="/img/agua00.png";

        }
        this.img = this.img1;

    }

}