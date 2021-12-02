require('dotenv').config();
const mysql = require('mysql');

    const connection = mysql.createConnection({
        host: process.env.HOST,
        user: process.env.USER,
        password: process.env.PASS,
        database: process.env.DATABASE
    });
    connection.connect((error) => {
        if (error) {
            console.log(`Ha ocurrido un error al conectar con la base de datos: ${error}`);        
        }else{
            console.log("Base de datos conectada!!!");
        }
    })

module.exports = {
    connection,
}