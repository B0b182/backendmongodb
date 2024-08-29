const express = require('express');
const router = express.Router();
const clienteController = require('../controllers/clienteController');

//Rutas del crud

router.post('/', clienteController.agregarclientes);
router.get('/', clienteController.mostarClientes);
router.get('/:id', clienteController.BuscarCliente);
//router.put('/:id', clienteController.modificarClientes);
router.patch('/:id', clienteController.editarunCliente);
router.delete('/:id', clienteController.borrarcliente);





module.exports = router;