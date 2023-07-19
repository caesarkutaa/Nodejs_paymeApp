const mongoose = require('mongoose');

const payableSchema = new mongoose.Schema({
    transaction: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Transaction',
      required: true,
    },
    status: {
      type: String,
      required: true,
    },
    payment_date: {
      type: Date,
      required: true,
    },
    fee: {
      type: Number,
      required: true,
    },
    created_at: {
      type: Date,
      default: Date.now,
    },
  });


module.exports = mongoose.model('Payable',payableSchema)