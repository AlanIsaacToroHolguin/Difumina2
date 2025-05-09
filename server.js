// server.js
const express = require('express');
const sequelize = require('./config/database');
const { Usuario, Producto, Tienda, Contacto, Lanzamiento, Noticia, Pedido, Carrito, Miembro } = require('./models');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Rutas (las definiremos después)
app.use('/api/usuarios', require('./routes/usuarios'));
app.use('/api/productos', require('./routes/productos'));
app.use('/api/tiendas', require('./routes/tiendas'));
app.use('/api/contactos', require('./routes/contactos'));
app.use('/api/lanzamientos', require('./routes/lanzamientos'));
app.use('/api/noticias', require('./routes/noticias'));
app.use('/api/pedidos', require('./routes/pedidos'));
app.use('/api/carritos', require('./routes/carritos'));
app.use('/api/miembros', require('./routes/miembros'));

// Sincronizar modelos con la base de datos
sequelize.sync({ force: false })
  .then(() => {
    console.log('Base de datos sincronizada');
    app.listen(PORT, () => {
      console.log(`Servidor corriendo en el puerto ${PORT}`);
    });
  })
  .catch(err => {
    console.error('Error al sincronizar la base de datos:', err);
  });

module.exports = app;                                                                                                                                     // server.js o app.js
                                                                                                                                                                                                                                                                   
