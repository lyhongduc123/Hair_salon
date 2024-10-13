const { FOREIGNKEYS } = require("sequelize/lib/query-types");
const { all } = require("../routes/bookingRoutes");

module.exports = (sequelize, DataTypes) => {
    const Booking = sequelize.define("bookings", {
        booking_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        booking_date: {
            type: DataTypes.DATE,
            allowNull: false
        },
        booking_time: {
            type: DataTypes.TIME,
            allowNull: false
        },
        booking_status: {
            type: DataTypes.STRING,
            allowNull: false
        },
        booking_price: {
            type: DataTypes.DECIMAL(10, 2)
        },
        booking_note: {
            type: DataTypes.STRING
        },
        customer_id: {
            type: DataTypes.INTEGER,
            FOREIGNKEYS: true
        },
        service_id: {
            type: DataTypes.INTEGER,
            FOREIGNKEYS: true
        },
        stylist_id: {
            type: DataTypes.INTEGER,
            FOREIGNKEYS: true
        }
    }, {
        tableName: 'bookings',
        timestamps: true
    });

    return Booking;
}
