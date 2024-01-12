const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');

// GET
router.get('/', (req, res) => {
  const dbQuery = 'SELECT * FROM "todo";';

  pool
  .query(dbQuery)
  .then((result) => {
    console.log('In Get Route;');
    res.send(result.rows).status(201);   
  })
  .catch((error) => {
    console.error('ERROR', error);
    res.send('Something wrong it GET:').status(500);
  });
});
// POST

// PUT

// DELETE

module.exports = router;
