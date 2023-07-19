const mongoose = require('mongoose');

const transactionSchema = new mongoose.Schema({
  amount: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  payment_method: {
    type: String,
    enum: ['debit_card', 'credit_card'],
    required: true,
  },
  card_number: {
    type: String,
    required: true,
  },
  cardholder_name: {
    type: String,
    required: true,
  },
  card_expiration_date: {
    type: Date,
    required: true,
  },
  card_cvv: {
    type: String,
    required: true,
  },
  created_at: {
    type: Date,
    default: Date.now,
  },
});



module.exports = mongoose.model('Transaction',transactionSchema)


