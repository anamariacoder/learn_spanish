module.exports = (sequelize, DataTypes) => {
  const LevelTest = sequelize.define(
    "LevelTest",
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
      
     
    },
    {
      tableName: "level-test"
    }
  );

  LevelTest.associate = () => {};

  return LevelTest;
};
