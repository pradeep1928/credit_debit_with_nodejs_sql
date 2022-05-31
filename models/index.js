const dbConfig = require("../config/db.config");
const Sequelize = require("sequelize");

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    dialect: dbConfig.dialect,
    pool: {
        max: dbConfig.pool.max,
        min: dbConfig.pool.min,
        acquire: dbConfig.pool.acquire,
        idle: dbConfig.pool.idle,
    },
});

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.users = require("../models/user.model")(sequelize, Sequelize);
db.transactions = require("../models/transaction.model")(sequelize, Sequelize);

db.users.hasMany(db.transactions, { foreignKey: 'usersId', targetKey: 'id' });
db.transactions.belongsTo(db.users, { foreignKey: 'usersId', targetKey: 'id' });

module.exports = db;