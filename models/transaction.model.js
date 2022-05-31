

module.exports = (sequelize, Sequelize) => {
    const Transactions = sequelize.define("transaction", {
        Amount: {
            type: Sequelize.REAL,
            allowNull: false,
        }
    });
    return Transactions
}