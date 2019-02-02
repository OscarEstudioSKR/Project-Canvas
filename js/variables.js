const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");

const fps = 1000; //Fotogramas por segundo del canvas
const numCasillas = [120,60];
const tamBiomas = (Math.random()*100)+50;
const tamCasilla = canvas.width/numCasillas[0]; //Tamaño de las casillas
const casillas = []; //Objetos casilla del juego



const biomasList = [
    {
        'tipo': "Tierra",
        'maxTam': 20 * tamBiomas,
        'tipoZona': "radial",
        'tipoUnion': "fluida",
        'imaNom': "base"
    },
    {
        'tipo': "Montaña",
        'maxTam': 30 * tamBiomas,
        'tipoZona': "radial",
        'tipoUnion': "compacta",
        'imaNom': "montana"
    },
    {
        'tipo': "Monte",
        'maxTam': 15 * tamBiomas,
        'tipoZona': "radial",
        'tipoUnion': "compacta",
        'imaNom': "monte"
    },
    {
        'tipo': "Lago",
        'maxTam': 30 * tamBiomas,
        'tipoZona': "radial",
        'tipoUnion': "compacta",
        'imaNom': "lago"
    },
    {
        'tipo': "Rio",
        'maxTam': 13 * tamBiomas,
        'tipoZona': "lineal",
        'tipoUnion': "fluida",
        'imaNom': "agua"
    },
    {
        'tipo': "Gran rio",
        'maxTam': 25 * tamBiomas,
        'tipoZona': "lineal",
        'tipoUnion': "compacta",
        'imaNom': "granrio"
    }
]