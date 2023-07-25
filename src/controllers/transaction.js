const Transaction = require('../models/transaction')
const Payable = require('../models/payables')


const createTransaction = async (req, res) => {
  try {
    console.log('req.body:', req.body);
    const {
      amount,
      description,
      payment_method,
      card_number,
      cardholder_name,
      card_expiration_date,
      card_cvv,
    } = req.body;

    console.log(req);
    // Validate required fields
    if (!amount || !description || !payment_method || !card_number || !cardholder_name || !card_expiration_date || !card_cvv) {
      return res.status(400).json({ error: 'Missing required fields.' });
    }

    // Create a new transaction
    const transaction = await Transaction.create({
      amount,
      description,
      payment_method,
      card_number,
      cardholder_name,
      card_expiration_date,
      card_cvv,
    });

    // Calculate payable information based on payment method and fee
    const fee = payment_method === 'debit_card' ? 0.03 : 0.05;
    const status = payment_method === 'debit_card' ? 'paid' : 'waiting_funds';
    const paymentDate = payment_method === 'debit_card' ? transaction.created_at : new Date(transaction.created_at.getTime() + 30 * 24 * 60 * 60 * 1000); // Add 30 days

    // Create a new payable
    const payable = await Payable.create({
      transaction: transaction._id,
      status,
      payment_date: paymentDate,
      fee,
    });

    res.status(201).json({
      transaction,
      payable,
    });
  } catch (error) {
    console.error('Error creating transaction:', error);
    res.status(500).json({ error: 'An error occurred while creating the transaction.' });
  }
};






const GetAllTransaction = async (req,res)=>{

    // Get all transactions
    
        try {
          // @ts-ignore
          const transactions = await Transaction.find();
      
          res.json(transactions);
        } catch (error) {
          console.error('Error getting transactions:', error);
          res.status(500).json({ error: 'An error occurred while retrieving transactions.' });
        }
      ;
    
}



module.exports= {
    createTransaction,
    GetAllTransaction
}