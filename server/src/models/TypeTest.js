module.exports = (sequelize, DataTypes) => {
  const TypeTest = sequelize.define(
    "TypeTest",
    {
      id: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        validate: {
          isUUID: 4,
          notNull: true
        }
      },
      name: {
        allowNull: false,
        type: DataTypes.STRING,
        validate: {
          notNull: true,
          len: [2, 50]
        }
      },
      createdAt: {
        field: "created_at",
        allowNull: false,
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
        validate: {
          isDate: true,
          notNull: true
        }
      }
    },
    {
      tableName: "type-test"
    }
  );

  TypeTest.associate = models => {
    TypeTest.hasMany(models.LevelTestUserSummary);
  };

  // TypeTest.associate = () => {};

  return TypeTest;
};
