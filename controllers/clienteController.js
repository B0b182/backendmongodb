const cliente = require('../models/Cliente');

//funcion agregar clientes

exports.agregarclientes = async (req, res) => {
    try {
        let clientes;
        clientes = new cliente(req.body)
        await clientes.save();
        res.json(clientes);

    } catch (error) {
        console.log(error)
        res.status(500).send('hubo un error al agregar a un cliente');


    }
}


//funcion buscar clientes

exports.mostarClientes = async (req, res) => {

    try {
        const clientes = await cliente.find();
        res.json(clientes)

    } catch (error) {
        console.log(500)
        res.status(500).send('hubo un error al mostar clientes');


    }

}

//buscar un cliente

exports.BuscarCliente = async (req, res) => {
    try {
        let clientes = await cliente.findById(req.params.id);
        if (!clientes) {
            res.status(404).send({ msg: "no se pudo encontar el cliente por id" })
        } else {
            res.json(clientes);
        }

    } catch (error) {
        console.log(error)
        res.status(500).send('hubo un error al buscar cliente');


    }

}

//funcion modificar clientes

exports.modificarClientes = async (req, res) => {
    try {
        let clientes = await cliente.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true });
        if (!clientes) { res.status(404).send("cliente no encontrado"); }
        else {
            res.json(clientes);
        }

    } catch (error) {
        console.log(error)
        res.status(500).send('hubo un error al modificar un cliente');

    }
}

//funcion modificar clientes usando patch en vez de put


exports.editarunCliente = async (req, res) => {
    try {

        let clientes = await cliente.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!clientes) { return res.status(404).send("cliente no encontrado"); }

        res.json(clientes);

    } catch (error) {
        console.log(error)
        res.status(500).send('hubo un error al modificar un cliente');

    }

}
//funcion borrar cliente

exports.borrarcliente = async (req, res) => {

    try {
        const clientes = await cliente.findById({ _id: req.params.id });
        if (!clientes) {
            res.status(404).send("el cliente no existe");
            return
        }
        await cliente.findOneAndDelete({ _id: req.params.id });
        res.json({ msg: "El cliente fue eliminado con exito" });
        return
    } catch (error) {
        console.log(error)
        res.status(500).send('no se pudo eliminar este cliente');
    }
}

