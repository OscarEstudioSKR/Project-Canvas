const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");

const fps = 480; //Fotogramas por segundo del canvas
const numCasillas = [100,50];
const tamCasilla = canvas.width/numCasillas[0]; //Tamaño de las casillas
const casillas = []; //Objetos casilla del juego



const biomasList = [
    {
        'tipo': "Montaña1",
        'maxTam': 600,
        'tipoZona': "radial",
        'tipoUnion': "compacta"
    },
    {
        'tipo': "Monte",
        'maxTam': 300,
        'tipoZona': "radial",
        'tipoUnion': "compacta"
    },
    {
        'tipo': "Lago",
        'maxTam': 300,
        'tipoZona': "radial",
        'tipoUnion': "compacta"
    },
    {
        'tipo': "Rio",
        'maxTam': 300,
        'tipoZona': "lineal",
        'tipoUnion': "compacta"
    },
    {
        'tipo': "Gran rio",
        'maxTam': 800,
        'tipoZona': "lineal",
        'tipoUnion': "compacta"
    }
]