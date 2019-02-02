const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");

const fps = 480; //Fotogramas por segundo del canvas
const numCasillas = [200,100];
const tamCasilla = canvas.width/numCasillas[0]; //Tamaño de las casillas
const casillas = []; //Objetos casilla del juego



const biomasList = [
    {
        'tipo': "Tierra",
        'maxTam': 50,
        'tipoZona': "radial",
        'tipoUnion': "fluida",
        'imaNom': "base"
    },
    {
        'tipo': "Montaña",
        'maxTam': 300,
        'tipoZona': "radial",
        'tipoUnion': "compacta",
        'imaNom': "montana"
    },
    {
        'tipo': "Monte",
        'maxTam': 150,
        'tipoZona': "radial",
        'tipoUnion': "compacta",
        'imaNom': "monte"
    },
    {
        'tipo': "Lago",
        'maxTam': 150,
        'tipoZona': "radial",
        'tipoUnion': "compacta",
        'imaNom': "lago"
    },
    {
        'tipo': "Rio",
        'maxTam': 150,
        'tipoZona': "lineal",
        'tipoUnion': "fluida",
        'imaNom': "agua"
    },
    {
        'tipo': "Gran rio",
        'maxTam': 400,
        'tipoZona': "lineal",
        'tipoUnion': "compacta",
        'imaNom': "granrio"
    }
]