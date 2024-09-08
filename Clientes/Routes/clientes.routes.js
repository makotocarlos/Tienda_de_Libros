/**
 * @author juan, marlon & carlos
 * @version 1.0.0
 * 
 * Rutas de clientes
 * Este archivo define las rutas de clientes
 */

const { Router } = require('express');

const router = Router();

/**
 * Importando los métodos
 */

const { AddClientes, ShowClientes, DeleteClientes, EditClientes, ShowCliente } = require('../controllers/clientes.controllers');

/**
 * Rutas
 */
router.get('/', ShowClientes);
router.post('/', AddClientes);
router.delete('/', DeleteClientes);
router.put('/', EditClientes);
router.get('/:id', ShowCliente);

module.exports = router;