const { response } = require("express");
const { connection } = require("../database/config");

const getContacts = async(req, res=response) => {
    connection.query({
        //NOTA: CREE UNA VISTA PARA OBTENER LOS CONTACTOS
        sql: "SELECT * FROM getContacts;",
        timeout: 20000, // 20s
    }, function (error, contacts) {
        //RETORNANDO MENSAJE DE ERROR EN CASO DE TENER UNO
        if(error) return console.log('Error al obtener contactos', error);

        //MOSTRANDO LOS RESULTADOS EN CONSOLA
        console.log('Resultados', contacts);

        //RETORNANDO LOS CONTACTOS
        //NOTA: EL MENSAJE "ok" ES OPCIONAL, INCLUSO MUCHOS DESARROLLADORES PREFIEREN NO USARLO
        res.json({
            ok: true,
            contacts
        });
    });
}

const addContact = async(req, res=response) => {
    const {name, lastname, phoneNumber} = req.body;
    connection.query({
        //NOTA: CREE UNA VISTA PARA OBTENER LOS CONTACTOS
        sql: `CALL addContact("${name}", "${lastname}", "${phoneNumber}");`,
        timeout: 20000, // 20s
    }, function (error, result) {
        //RETORNANDO MENSAJE DE ERROR EN CASO DE TENER UNO
        if(error) return console.log('Error al guardar contacto', error);

        //MOSTRANDO LOS RESULTADOS EN CONSOLA
        console.log('Resultados', result);

        //RETORNANDO LOS CONTACTOS
        //NOTA: EL MENSAJE "ok" ES OPCIONAL, INCLUSO MUCHOS DESARROLLADORES PREFIEREN NO USARLO
        res.json({
            ok: true,
            msg: "Usuario insertado satisfactoriamente!"
        });
    });
}

module.exports = {
    getContacts,
    addContact
}