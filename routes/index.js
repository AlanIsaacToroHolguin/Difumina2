// routes/index.js

//MODELO 

//VISTAS 

//uSUARIO

//CONTROLES

//ORGANIZAR EL SERVIDOR  NODEJS     

//CODIGO DE ESTADO 200 FUNCIONA         500 ERROR  


//VISTAS CON ANGULAR 

//POSTMAN




const express = require('express');
const router = express.Router();

// Importar todas las rutas
const usuariosRoutes = require('./usuario');
const productosRoutes = require('./productos');
const pedidosRoutes = require('./pedidos');
const carritosRoutes = require('./carritos');

// Registrar las rutas con prefijos
router.use('/usuarios', usuariosRoutes);
router.use('/productos', productosRoutes);
router.use('/pedidos', pedidosRoutes);
router.use('/carritos', carritosRoutes);

module.exports = router;