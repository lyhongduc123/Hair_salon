module.exports = (sequelize, DataTypes) => {
    const Service = sequelize.define("services", {
        service_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        service_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        service_price: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: false
        },
        service_duration: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        service_description: {
            type: DataTypes.STRING
        }
    }, {
        tableName: 'services',
        timestamps: true
    });

    return Service;
};