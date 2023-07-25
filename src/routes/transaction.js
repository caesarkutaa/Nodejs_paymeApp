const { Router } = require("express");
const router = Router();
const transaction = require('../controllers/transaction')


router.post('/transaction',transaction.createTransaction)
router.get('/transactions', transaction.GetAllTransaction)


module.exports = router