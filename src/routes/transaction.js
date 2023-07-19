const { Router } = require("express");
const router = Router();
const transaction = require('../controllers/transaction')


router.post('/transactions',transaction.createTransaction)
router.get('/transaction', transaction.GetAllTransaction)


module.exports = router