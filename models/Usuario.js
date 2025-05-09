const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Usuario = sequelize.define('Usuario', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  nombre: {
    type: DataTypes.STRING,
    allowNull: false
  },
  url: {
    type: DataTypes.STRING
  },
  foto_url: {
    type: DataTypes.STRING
  },
  instagram: {
    type: DataTypes.STRING
  },
  biografia: {
    type: DataTypes.TEXT
  },
  instagram: {
    type: DataTypes.STRING
  },
  url_perfil: {
    type: DataTypes.STRING
  }
}, {
  tableName: 'usuarios',
  timestamps: true
});

module.exports = Usuario;

// models/Producto.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Producto = sequelize.define('Producto', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  nombre: {
    type: DataTypes.STRING,
    allowNull: false
  },
  descripcion: {
    type: DataTypes.TEXT
  },
  precio: {
    type: DataTypes.DECIMAL(10, 2)
  },
  imagen_url: {
    type: DataTypes.STRING
  },
  stock: {
    type: DataTypes.INTEGER
  }
}, {
  tableName: 'productos',
  timestamps: true
});

module.exports = Producto;

// models/Tienda.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Tienda = sequelize.define('Tienda', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  nombre: {
    type: DataTypes.STRING,
    allowNull: false
  },
  descripcion: {
    type: DataTypes.TEXT
  },
  ubicacion: {
    type: DataTypes.STRING
  },
  contacto: {
    type: DataTypes.STRING
  }
}, {
  tableName: 'tiendas',
  timestamps: true
});

module.exports = Tienda;

// models/Contacto.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Contacto = sequelize.define('Contacto', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  mensaje: {
    type: DataTypes.TEXT
  },
  fecha: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW
  },
  usuario_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'usuarios',
      key: 'id'
    }
  }
}, {
  tableName: 'contactos',
  timestamps: true
});

module.exports = Contacto;

// models/Lanzamiento.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Lanzamiento = sequelize.define('Lanzamiento', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  nombre: {
    type: DataTypes.STRING,
    allowNull: false
  },
  contenido: {
    type: DataTypes.TEXT
  },
  fecha: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW
  }
}, {
  tableName: 'lanzamientos',
  timestamps: true
});

module.exports = Lanzamiento;

// models/Noticia.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Noticia = sequelize.define('Noticia', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  titulo: {
    type: DataTypes.STRING,
    allowNull: false
  },
  contenido: {
    type: DataTypes.TEXT
  },
  fecha: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW
  },
  autor_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'usuarios',
      key: 'id'
    }
  }
}, {
  tableName: 'noticias',
  timestamps: true
});

module.exports = Noticia;

// models/Pedido.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Pedido = sequelize.define('Pedido', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  usuario_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'usuarios',
      key: 'id'
    }
  },
  fecha: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW
  },
  total: {
    type: DataTypes.DECIMAL(10, 2)
  },
  estado: {
    type: DataTypes.ENUM('pendiente', 'pagado', 'enviado', 'entregado')
  }
}, {
  tableName: 'pedidos',
  timestamps: true
});

module.exports = Pedido;

// models/Carrito.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Carrito = sequelize.define('Carrito', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  usuario_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'usuarios',
      key: 'id'
    }
  },
  cantidad: {
    type: DataTypes.INTEGER,
    defaultValue: 1
  }
}, {
  tableName: 'carritos',
  timestamps: true
});

module.exports = Carrito;

// models/Miembro.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Miembro = sequelize.define('Miembro', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  nombre: {
    type: DataTypes.STRING(100),
    allowNull: false
  },
  instrumento: {
    type: DataTypes.STRING(100)
  },
  biografia: {
    type: DataTypes.TEXT
  },
  instagram: {
    type: DataTypes.STRING
  },
  foto_url: {
    type: DataTypes.STRING(255)
  }
}, {
  tableName: 'miembros',
  timestamps: true
});

module.exports = Miembro;

// models/index.js - Archivo para establecer relaciones entre modelos
const sequelize = require('../config/database');
const Usuario = require('./Usuario');
const Producto = require('./Producto');
const Tienda = require('./Tienda');
const Contacto = require('./Contacto');
const Lanzamiento = require('./Lanzamiento');
const Noticia = require('./Noticia');
const Pedido = require('./Pedido');
const Carrito = require('./Carrito');
const Miembro = require('./Miembro');
const CarritoProducto = require('./CarritoProducto');
const PedidoProducto = require('./PedidoProducto');

// Relaciones entre modelos
Usuario.hasMany(Contacto, { foreignKey: 'usuario_id' });
Contacto.belongsTo(Usuario, { foreignKey: 'usuario_id' });

Usuario.hasMany(Noticia, { foreignKey: 'autor_id' });
Noticia.belongsTo(Usuario, { foreignKey: 'autor_id' });

Usuario.hasMany(Pedido, { foreignKey: 'usuario_id' });
Pedido.belongsTo(Usuario, { foreignKey: 'usuario_id' });

Usuario.hasOne(Carrito, { foreignKey: 'usuario_id' });
Carrito.belongsTo(Usuario, { foreignKey: 'usuario_id' });

// Relación muchos a muchos entre Carrito y Producto
Carrito.belongsToMany(Producto, { through: CarritoProducto, foreignKey: 'carrito_id' });
Producto.belongsToMany(Carrito, { through: CarritoProducto, foreignKey: 'producto_id' });

// Relación muchos a muchos entre Pedido y Producto
Pedido.belongsToMany(Producto, { through: PedidoProducto, foreignKey: 'pedido_id' });
Producto.belongsToMany(Pedido, { through: PedidoProducto, foreignKey: 'producto_id' });

// Exportar modelos
module.exports = {
  sequelize,
  Usuario,
  Producto,
  Tienda,
  Contacto,
  Lanzamiento,
  Noticia,
  Pedido,
  Carrito,
  Miembro,
  CarritoProducto,
  PedidoProducto
};

// models/CarritoProducto.js - Tabla de unión
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const CarritoProducto = sequelize.define('CarritoProducto', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  carrito_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'carritos',
      key: 'id'
    }
  },
  producto_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'productos',
      key: 'id'
    }
  },
  cantidad: {
    type: DataTypes.INTEGER,
    defaultValue: 1
  }
}, {
  tableName: 'carritos_productos',
  timestamps: true
});

module.exports = CarritoProducto;

// models/PedidoProducto.js - Tabla de unión
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const PedidoProducto = sequelize.define('PedidoProducto', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  pedido_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'pedidos',
      key: 'id'
    }
  },
  producto_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'productos',
      key: 'id'
    }
  },
  cantidad: {
    type: DataTypes.INTEGER,
    defaultValue: 1
  },
  precio_unitario: {
    type: DataTypes.DECIMAL(10, 2)
  }
}, {
  tableName: 'pedidos_productos',
  timestamps: true
});

module.exports = PedidoProducto;