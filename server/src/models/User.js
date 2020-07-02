const bcrypt = require("bcryptjs");

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    "User",
    {
      id: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        validate: {
          isUUID: 4,
          notNull: true,
        },
      },
      account: {
        allowNull: true,
        type: DataTypes.STRING,
        validate: {
          notNull: false,
          len: [2, 50],
        },
      },

      first_name: {
        allowNull: false,
        type: DataTypes.STRING,
        validate: {
          notNull: true,
          len: [2, 200],
        },
      },

      last_name: {
        allowNull: false,
        type: DataTypes.STRING,
        validate: {
          notNull: true,
          len: [2, 200],
        },
      },

      password: {
        allowNull: false,
        type: DataTypes.STRING,
        validate: {
          notNull: true,
          len: [2, 200],
        },
      },

      email: {
        allowNull: false,
        type: DataTypes.STRING,
        validate: {
          notNull: true,
          len: [6, 200],
        },
      },

      createdAt: {
        field: "created_at",
        allowNull: false,
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
        validate: {
          isDate: true,
          notNull: true,
        },
      },
      updatedAt: {
        field: "updated_at",
        allowNull: false,
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
        validate: {
          isDate: true,
          notNull: true,
        },
      },
    },
    {
      tableName: "user",
    }
  );
  User.associate = (models) => {
    User.hasMany(models.LevelTestUserSummary);
  };

  User.beforeCreate(async (user, options) => {
    const hashedPassword = await bcrypt.hash(user.password, 10);
    user.password = hashedPassword;
  });

  return User;

  // AVANT:
  // User.associate = () => {};
  // return User;
};
