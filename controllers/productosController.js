const Productos = require('../models/Producto');


//funcion agregar productos

exports.agregarproducto = async (req, res) => {
    try {
        let produc;
        produc = new Productos(req.body)
        await produc.save();
        res.json(produc);

    } catch (error) {
        console.log(error)
        res.status(500).send('hubo un error al agregar el producto');


    }
}

//funcion buscar productos

exports.mostarproductos = async (req, res) => {

    try {
        const produc = await Productos.find();
        res.json(produc)

    } catch (error) {
        console.log(500)
        res.status(500).send('hubo un error al mostar productos');


    }

}

//buscar un producto

exports.BuscarProducto = async (req, res) => {
    try {
        let produc = await Productos.findById(req.params.id);
        if (!produc) {
            res.status(404).send({ msg: "no se pudo encontar este producto por id" })
        } else {
            res.json(produc);
        }

    } catch (error) {
        console.log(error)
        res.status(500).send('hubo un error al buscar el producto');


    }

}

//funcion modificar productos

exports.modificarProductos = async (req, res) => {
    try {
        let produc = await Productos.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true });
        if (!produc) { res.status(404).send("producto no encontrado"); }
        else {
            res.json(produc);
        }

    } catch (error) {
        console.log(error)
        res.status(500).send('hubo un error al modificar el producto');

    }
}

//funcion modificar producto usando patch en vez de put


exports.editarunproducto = async (req, res) => {
    try {

        let produc = await Productos.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!produc) { return res.status(404).send("producto no encontrado"); }

        res.json(produc);

    } catch (error) {
        console.log(error)
        res.status(500).send('hubo un error al modificar el producto');

    }
}

//funcion borrar un producto

exports.borrarproducto = async (req, res) => {

    try {
        const produc = await Productos.findById({ _id: req.params.id });
        if (!produc) {
            res.status(404).send("el producto no existe");
            return
        }
        await Productos.findOneAndDelete({ _id: req.params.id });
        res.json({ msg: "El producto fue eliminado con exito" });
        return
    } catch (error) {
        console.log(error)
        res.status(500).send('no se pudo eliminar este producto');
    }
}

