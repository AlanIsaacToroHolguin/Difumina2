
// routes/usuarios.js
const { body, validationResult } = require('express-validator');



// En la ruta POST, antes del controlador
router.post('/', [
  body('nombre').notEmpty().withMessage('El nombre es requerido'),
  body('email').isEmail().withMessage('Email inválido'),
  // Más validaciones según tus campos
], async (req, res) => {
  // Verificar errores de validación
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  
const express = require('express');
const router = express.Router();
const { Usuario } = require('../models');

// Obtener todos los usuarios
router.get('/', async (req, res) => {
    try {
        const usuarios = await Usuario.findAll();
        res.json(usuarios);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Obtener un usuario por ID
router.get('/:id', async (req, res) => {
    try {
        const usuario = await Usuario.findByPk(req.params.id);
        if (!usuario) {
            return res.status(404).json({ message: 'Usuario no encontrado' });
        }
        res.json(usuario);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Crear un nuevo usuario
router.post('/', async (req, res) => {
    try {
        const usuario = await Usuario.create(req.body);
        res.status(201).json(usuario);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Actualizar un usuario
router.put('/:id', async (req, res) => {
    try {
        const usuario = await Usuario.findByPk(req.params.id);
        if (!usuario) {
            return res.status(404).json({ message: 'Usuario no encontrado' });
        }
        await usuario.update(req.body);
        res.json(usuario);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Eliminar un usuario
router.delete('/:id', async (req, res) => {
    try {
        const usuario = await Usuario.findByPk(req.params.id);
        if (!usuario) {
            return res.status(404).json({ message: 'Usuario no encontrado' });
        }
        await usuario.destroy();
        res.json({ message: 'Usuario eliminado' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;

// routes/productos.js
const express = require('express');
const router = express.Router();
const { Producto } = require('../models');

// Obtener todos los productos
router.get('/', async (req, res) => {
    try {
        const productos = await Producto.findAll();
        res.json(productos);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Obtener un producto por ID
router.get('/:id', async (req, res) => {
    try {
        const producto = await Producto.findByPk(req.params.id);
        if (!producto) {
            return res.status(404).json({ message: 'Producto no encontrado' });
        }
        res.json(producto);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Crear un nuevo producto
router.post('/', async (req, res) => {
    try {
        const producto = await Producto.create(req.body);
        res.status(201).json(producto);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Actualizar un producto
router.put('/:id', async (req, res) => {
    try {
        const producto = await Producto.findByPk(req.params.id);
        if (!producto) {
            return res.status(404).json({ message: 'Producto no encontrado' });
        }
        await producto.update(req.body);
        res.json(producto);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Eliminar un producto
router.delete('/:id', async (req, res) => {
    try {
        const producto = await Producto.findByPk(req.params.id);
        if (!producto) {
            return res.status(404).json({ message: 'Producto no encontrado' });
        }
        await producto.destroy();
        res.json({ message: 'Producto eliminado' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;

// routes/pedidos.js
const express = require('express');
const router = express.Router();
const { Pedido, PedidoProducto, Producto } = require('../models');

// Obtener todos los pedidos
router.get('/', async (req, res) => {
    try {
        const pedidos = await Pedido.findAll({
            include: [Producto]
        });
        res.json(pedidos);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Obtener un pedido por ID
router.get('/:id', async (req, res) => {
    try {
        const pedido = await Pedido.findByPk(req.params.id, {
            include: [Producto]
        });
        if (!pedido) {
            return res.status(404).json({ message: 'Pedido no encontrado' });
        }
        res.json(pedido);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Crear un nuevo pedido
router.post('/', async (req, res) => {
    try {
        const { usuario_id, productos, total, estado } = req.body;

        // Crear el pedido
        const pedido = await Pedido.create({
            usuario_id,
            total,
            estado
        });

        // Agregar productos al pedido
        if (productos && productos.length > 0) {
            for (const item of productos) {
                await PedidoProducto.create({
                    pedido_id: pedido.id,
                    producto_id: item.producto_id,
                    cantidad: item.cantidad,
                    precio_unitario: item.precio_unitario
                });
            }
        }

        // Obtener el pedido completo con productos
        const pedidoCompleto = await Pedido.findByPk(pedido.id, {
            include: [Producto]
        });

        res.status(201).json(pedidoCompleto);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Actualizar estado de un pedido
router.put('/:id', async (req, res) => {
    try {
        const pedido = await Pedido.findByPk(req.params.id);
        if (!pedido) {
            return res.status(404).json({ message: 'Pedido no encontrado' });
        }

        await pedido.update(req.body);

        // Obtener el pedido actualizado
        const pedidoActualizado = await Pedido.findByPk(req.params.id, {
            include: [Producto]
        });

        res.json(pedidoActualizado);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

module.exports = router;

// routes/carritos.js
const express = require('express');
const router = express.Router();
const { Carrito, CarritoProducto, Producto, Usuario } = require('../models');

// Obtener el carrito de un usuario
router.get('/usuario/:usuario_id', async (req, res) => {
    try {
        let carrito = await Carrito.findOne({
            where: { usuario_id: req.params.usuario_id },
            include: [Producto]
        });

        // Si el usuario no tiene carrito, crear uno nuevo
        if (!carrito) {
            carrito = await Carrito.create({
                usuario_id: req.params.usuario_id
            });
            carrito = await Carrito.findOne({
                where: { id: carrito.id },
                include: [Producto]
            });
        }

        res.json(carrito);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Agregar producto al carrito
router.post('/agregar', async (req, res) => {
    try {
        const { usuario_id, producto_id, cantidad } = req.body;

        // Buscar o crear el carrito del usuario
        let [carrito] = await Carrito.findOrCreate({
            where: { usuario_id }
        });

        // Buscar si el producto ya está en el carrito
        let carritoProducto = await CarritoProducto.findOne({
            where: {
                carrito_id: carrito.id,
                producto_id
            }
        });

        if (carritoProducto) {
            // Si ya existe, actualizar la cantidad
            carritoProducto.cantidad += cantidad || 1;
            await carritoProducto.save();
        } else {
            // Si no existe, crear nueva relación
            await CarritoProducto.create({
                carrito_id: carrito.id,
                producto_id,
                cantidad: cantidad || 1
            });
        }

        // Obtener el carrito actualizado
        const carritoActualizado = await Carrito.findByPk(carrito.id, {
            include: [Producto]
        });

        res.status(201).json(carritoActualizado);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Actualizar cantidad de un producto en el carrito
router.put('/actualizar', async (req, res) => {
    try {
        const { carrito_id, producto_id, cantidad } = req.body;

        let carritoProducto = await CarritoProducto.findOne({
            where: {
                carrito_id,
                producto_id
            }
        });

        if (!carritoProducto) {
            return res.status(404).json({ message: 'Producto no encontrado en el carrito' });
        }

        if (cantidad > 0) {
            carritoProducto.cantidad = cantidad;
            await carritoProducto.save();
        } else {
            // Si la cantidad es 0 o menos, eliminar el producto del carrito
            await carritoProducto.destroy();
        }

        // Obtener el carrito actualizado
        const carritoActualizado = await Carrito.findByPk(carrito_id, {
            include: [Producto]
        });

        res.json(carritoActualizado);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Vaciar carrito
router.delete('/vaciar/:carrito_id', async (req, res) => {
    try {
        await CarritoProducto.destroy({
            where: {
                carrito_id: req.params.carrito_id
            }
        });

        res.json({ message: 'Carrito vaciado correctamente' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;

*/