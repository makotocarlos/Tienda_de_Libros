/**
 * @author juan, marlon & carlos
 * @version 1.0.0
 * 
 * Rutas de clientes
 * Este archivo define las rutas de clientes
 */

const {Router} = require('express');

const router= Router();

/**
 * Importando los metodos
 */

const {AddUsers, ShowUsers, DeleteUsers, EditUsers, ShowUser} = require('../Controllers/clientes.controllers');

/**
 * Rutas
 */
router.get('/', ShowUsers);
router.post('/', AddUsers);
router.delete('/', DeleteUsers);
router.put('/:id', EditUsers);
router.get('/:id', ShowUser);

module.exports = router;