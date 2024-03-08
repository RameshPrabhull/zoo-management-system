// server.js

const express = require('express');
const mysql = require('mysql');

const app = express();

// MySQL Connection Configuration
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'ramesh',
  database: 'sample'
});

// Connect to MySQL
connection.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL: ', err);
    return;
  }
  console.log('Connected to MySQL database');
});

// API endpoint to create a table
app.get('/createTable', (req, res) => {
  const createTableQuery = `
    CREATE TABLE chatgpt3(
      id INT ,
      name VARCHAR(255) NOT NULL,
      email VARCHAR(255) NOT NULL
    )
  `;

  connection.query(createTableQuery, (err, result) => {
    if (err) {
      console.error('Error creating table: ', err);
      res.status(500).json({ error: 'Error creating table' });
      return;
    }
    console.log('Table created successfully');
    res.status(200).json({ message: 'Table created successfully r' });
  });
});

const PORT =5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
