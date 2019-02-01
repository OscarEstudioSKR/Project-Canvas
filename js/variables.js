const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");

const fps = 480; //Fotogramas por segundo del canvas
const numCasillas = [100,50];
const tamCasilla = canvas.width/numCasillas[0]; //Tamaño de las casillas
const casillas = []; //Objetos casilla del juego

const colorRojo = "#913535";

