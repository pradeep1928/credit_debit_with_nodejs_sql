

module.exports = (sequelize, Sequelize) => {
    const Users = sequelize.define("user", {
        username: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        email: {
            type: Sequelize.STRING,
            allowNull: false
        },
        password: {
            type: Sequelize.STRING,
            allowNull: false
        }
    });
    return Users
}