/**
 * @author juan, marlon & carlos
 * @version 1.0.0
 * 
 * Controlador de clientes
 * Este archivo define los controladores de clientes
 */

const { response, request } = require('express');

const ShowClientes = async (req = request, res = response) => {
    res.json({
        "saludo": "soy la respuesta de mostrar clientes"
    });
};

const AddClientes = async (req = request, res = response) => {
    res.json({
        "saludo": "soy la respuesta de agregar clientes"
    });
};

const ShowCliente = async (req = request, res = response) => {
    res.json({
        "saludo": "soy la respuesta de mostrar un cliente"
    });
};

const EditClientes = async (req = request, res = response) => {
    res.json({
        "saludo": "soy la respuesta de editar clientes"
    });
};

const DeleteClientes = async (req = request, res = response) => {
    res.json({
        "saludo": "soy la respuesta de eliminar clientes"
    });
};

module.exports = {
    AddClientes,
    ShowClientes,
    ShowCliente,
    EditClientes,
    DeleteClientes
};