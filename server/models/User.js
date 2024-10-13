const { all } = require("../routes/bookingRoutes");

module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define("users", {
        user_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        user_email: {
            type: DataTypes.STRING,
            allowNull: false
        },
        user_password: {
            type: DataTypes.STRING,
            allowNull: false
        },
        user_phone: {
            type: DataTypes.STRING
        },
        user_role: {
            type: DataTypes.STRING,
            defaultValue: 'user'
        }
    }, {
        tableName: 'users',
        timestamps: true
    });

    User.associate = (models) => {
        User.hasMany(models.bookings, {
            foreignKey: 'user_id',
            as: 'bookings'
        });
    };

    return User;
}