# Nodejs_paymeApp
# PayMe - Simplified Payment Service Provider

PayMe is a simplified Payment Service Provider (PSP) application built with Node.js and MongoDB. It allows users to process transactions, create payables, and manage their balance. This project was created as part of the Software Engineer Challenge at Pagar.me.

## Features

- Process transactions with detailed information such as amount, description, payment method, card details, etc.
- Create payables for each transaction based on the payment method and calculate fees.
- Retrieve a list of transactions and their associated payables.
- Calculate and display the available and waiting funds balance for each user.

## Prerequisites

Before running the application, ensure that you have the following installed:

- Node.js 
- MongoDB 

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/payme.git
   ```

2. Navigate to the project directory:

   ```bash
   cd payapp
   ```

3. Install the dependencies:

   ```bash
   npm install
   ```

4. Set up the environment variables:

   - Create a `.env` file in the project root.
   - Add the following environment variables and update their values accordingly:

     ```plaintext
     MONGODB_URI=mongodb://localhost/payments
     PORT=3000
     ```

5. Start the application:

   ```bash
   npm start
   ```

6. Access the application at `http://localhost:3000`.

## API Endpoints

- `POST /transactions`: Create a new transaction.
- `GET /transactions`: Get all transactions.

## Testing

To run the automated tests, use the following command:

```bash
npm test
```

## Deployment

The application can be deployed to a hosting platform of your choice, such as Heroku, AWS, or Azure. Make sure to set up the necessary environment variables in your deployment environment.

## Contributing

Contributions are welcome! If you find any issues or would like to add new features, feel free to open a pull request. Please ensure that your code adheres to the project's coding standards and passes the tests.



## Acknowledgements

- This project was developed as part of the Software Engineer Challenge at Pagar.me.
- Thanks to the creators and maintainers of Node.js, MongoDB, and the various dependencies used in this project.

## Contact

For any inquiries or questions, please contact (caesarokeke57@gmail.com).

---

Feel free to customize this README.md file based on your project's specific details, such as adding additional sections or modifying the content to reflect your project's unique characteristics.
