const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const db = require('../models/index');
const Transactions = db.transactions;
const Op = db.Sequelize.Op;


// add money 
exports.credit = (req, res) => {
    try {
        const transaction = {
            amount: req.body.amount
        }
        const newTransaction = await Transactions.create(transaction)
        res.status(201).json(newTransaction)
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
}



exports.debit = (req, res) => {
    try {
        
        res.status(201).json(sumAmount)
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }

}



exports.view = (req, res) => {
    try {
        const transaction = await Transactions.findAll({});
        res.status(200).json(transaction);      
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
}