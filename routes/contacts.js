/*
path: /api/contacts
*/

const { Router } = require('express');
const { getContacts, addContact } = require('../controllers/contacts');

const router = Router();

//Ruta para obtener los contactos
router.get('/', getContacts);

//Ruta para agregar un contacto
router.post('/addContact', addContact);

module.exports = router;