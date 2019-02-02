const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");

const fps = 1000; //Fotogramas por segundo del canvas
const numCasillas = [120,60];
const tamBiomas = (Math.random()*100)+50;
const tamCasilla = canvas.width/numCasillas[0]; //Tamaño de las casillas
const casillas = []; //Objetos casilla del juego



const biomasList = [
    {
        'nombre': "Tierra",
        'tipo': "tierra",
        'maxTam': 20 * tamBiomas,
        'tipoZona': "radial",
        'tipoUnion': "fluida",
        'imaNom': "base"
    },
    {
        'nombre': "Montaña",
        'tipo': "montaña",
        'maxTam': 30 * tamBiomas,
        'tipoZona': "radial",
        'tipoUnion': "compacta",
        'imaNom': "montana"
    },
    {
        'nombre': "Monte",
        'tipo': "monte",
        'maxTam': 15 * tamBiomas,
        'tipoZona': "radial",
        'tipoUnion': "compacta",
        'imaNom': "monte"
    },
    {
        'nombre': "Pradera",
        'tipo': "hierba",
        'maxTam': 40 * tamBiomas,
        'tipoZona': "radial",
        'tipoUnion': "compacta",
        'imaNom': "hierba"
    },
    {
        'nombre': "Lago",
        'tipo': "agua",
        'maxTam': 30 * tamBiomas,
        'tipoZona': "radial",
        'tipoUnion': "compacta",
        'imaNom': "agua"
    },
    {
        'nombre': "Riachuelo",
        'tipo': "agua",
        'maxTam': 10 * tamBiomas,
        'tipoZona': "lineal",
        'tipoUnion': "fluida",
        'imaNom': "agua"
    },
    {  
        'nombre': "Gran rio",
        'tipo': "agua",
        'maxTam': 20 * tamBiomas,
        'tipoZona': "lineal",
        'tipoUnion': "compacta",
        'imaNom': "agua"
    }
]