const express = require("express");
const router = express.Router();

const transaction = require("../controllers/transaction.controller");
const { authUser } = require("../middleware/authentication");

router.post("/credit", authUser, transaction.credit);
router.post("/debit", authUser, transaction.debit);
router.post("/view", authUser, transaction.view);



module.exports = router;
