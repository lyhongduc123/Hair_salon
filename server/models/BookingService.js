module.exports = (sequelize, DataTypes) => {
    const BookingService = sequelize.define("booking_services", {
        booking_service_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        booking_id: {
            type: DataTypes.INTEGER,
            FOREIGNKEYS: true
        },
        service_id: {
            type: DataTypes.INTEGER,
            FOREIGNKEYS: true
        }
    }, {
        tableName: 'booking_services',
        timestamps: true
    });

    BookingService.associate = (models) => {
        BookingService.belongsTo(models.bookings, {
            foreignKey: 'booking_id',
            as: 'booking'
        });
        BookingService.belongsTo(models.services, {
            foreignKey: 'service_id',
            as: 'service'
        });
    };
}