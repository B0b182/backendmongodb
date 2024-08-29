const express = require('express');
const router = express.Router();
const productosController = require('../controllers/productosController');

//Rutas del crud

router.post('/', productosController.agregarproducto);
router.get('/', productosController.mostarproductos);
router.get('/:id', productosController.BuscarProducto);
router.put('/:id', productosController.modificarProductos);
//router.patch('/:id', productosController.editarunproducto);
router.delete('/:id', productosController.borrarproducto);






module.exports = router;