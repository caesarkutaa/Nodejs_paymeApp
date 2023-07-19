const Transaction = require('../models/transaction')
const Payable = require('../models/payables')

const createTransaction = async (req,res)=>{
    
    // Create a transaction
      try {
        const {
          amount,
          description,
          payment_method,
          card_number,
          cardholder_name,
          card_expiration_date,
          card_cvv,
        } = req.body;
    
        // Create a new transaction
        // @ts-ignore
        const transaction = await Transaction.create({
            amount,
            description,
            payment_method,
            card_number,
            cardholder_name,
            card_expiration_date,
            card_cvv,});
    
    
        // Calculate payable information based on payment method and fee
        let status, paymentDate;
        const fee = payment_method === 'debit_card' ? 0.03 : 0.05;
        if (payment_method === 'debit_card') {
          status = 'paid';
          paymentDate = transaction.created_at;
        } else if (payment_method === 'credit_card') {
          status = 'waiting_funds';
          paymentDate = new Date(transaction.created_at.getTime() + 30 * 24 * 60 * 60 * 1000); // Add 30 days
        }
    
        // Create a new payable
        // @ts-ignore
        const payable = await Payable.creates({
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
        res.status(500).json({ errors: error,error: 'An error occurred while creating the transaction.' });
      }
    ;
    
    
    
    
}



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