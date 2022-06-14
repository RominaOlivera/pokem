const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Pokemon', {
    
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true,

    },
    

    name: {
      type: DataTypes.STRING,
      allowNull: false,
      
    },

    imagen: {
      type: DataTypes.TEXT,
      allowNull: true,
    },

    vida: { 
      type: DataTypes.INTEGER,
      allowNull: false
    },

    attack: {
      type: DataTypes.INTEGER,
      allowNull: false
    }, 

    defensa: {
      type: DataTypes.INTEGER,
      allowNull: false
    },

    velocidad: {
      type: DataTypes.INTEGER,
      allowNull: false
    },

    altura: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },

    peso: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },

    creadoBd: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true,
    },

  },

  {
    timestamps: false
  }
  
  );
};


