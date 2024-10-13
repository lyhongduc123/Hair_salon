const dbConfig = require('../config/config');
const {Sequelize} = require('sequelize');

const sequelize = new Sequelize(
    dbConfig.DB, 
    dbConfig.USER, 
    dbConfig.PASSWORD, 
    {
        host: dbConfig.HOST,
        dialect: dbConfig.dialect,
    }
);

sequelize.authenticate()
.then(() => {
    console.log("Connection to database established!");
})
.catch((err) => {
    console.log("Unable to connect to the database: ", err);
    process.exit();
});


const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.users = require('./User')(sequelize, Sequelize);
db.services = require('./Service')(sequelize, Sequelize);
db.bookings = require('./Booking')(sequelize, Sequelize);

module.exports = db;