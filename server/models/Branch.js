module.exports = (sequelize, DataTypes) => {
    const Branch = sequelize.define("branches", {
        branch_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        branch_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        branch_address: {
            type: DataTypes.STRING,
            allowNull: false
        },
        branch_phone: {
            type: DataTypes.STRING
        },
        branch_email: {
            type: DataTypes.STRING
        }
    }, {
        tableName: 'branches',
        timestamps: true
    });

    return Branch
};