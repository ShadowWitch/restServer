
// NOTA: Esto se suele usar mucho para configurar el proyecto y que el mismo detecte si esta en ambiente de "Produccion" o de "Desarrollo"

// ==============================
// Puerto
// ==============================

process.env.PORT = process.env.PORT || 3000;


// ==============================
// Entorno
// ==============================

process.env.NODE_ENV = process.env.NODE_ENV || 'dev'; // NODE_ENV es una variable que ya nos proporciona heroku para usarla y saber si estamos en entorno de "produccion" o "desarrollo"


// ==============================
// Base de datos
// ==============================

let urlDB;

if(process.env.NODE_ENV === 'dev'){
    urlDB = 'mongodb://localhost:27017/cafe2';
}else{

    urlDB = process.env.URIDB;

}

process.env.URLDB = urlDB; // Aqui nos estamos inventando una variable de entorno, llamada "URLDB"




// qwe