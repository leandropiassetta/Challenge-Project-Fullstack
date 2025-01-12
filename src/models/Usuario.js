module.exports = (sequelize, DataTypes) => {
  const Usuario = sequelize.define(
    'Usuario',
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      name: DataTypes.STRING,
      email: DataTypes.STRING,
      message: DataTypes.TEXT,
      createdAt: {
        field: 'create_at',
        type: DataTypes.DATE,
      },
      updatedAt: {
        field: 'update_at',
        type: DataTypes.DATE,
      },
    },
    {
      tableName: 'usuario',
    }
  );
  return Usuario;
};
