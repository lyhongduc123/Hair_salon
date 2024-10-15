const e = require("express");

module.exports = (sequelize, DataTypes) => {
    const Employee = sequelize.define("employees", {
        employee_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        employee_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        employee_email: {
            type: DataTypes.STRING,
            allowNull: false
        },
        employee_phone: {
            type: DataTypes.STRING
        },
        branch_id: {
            type: DataTypes.INTEGER,
            FOREIGNKEYS: true
        }
    }, {
        tableName: 'employees',
        timestamps: true
    });

    Employee.associate = (models) => {
        Employee.belongsTo(models.branches, {
            foreignKey: 'branch_id',
            as: 'branch'
        });
    };

    return Employee;
};