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
router.post('/', (req, res) => {
  const newTask = req.body;
  const queryArgs = [newTask.task, newTask.description];
  const queryText = `
  INSERT INTO "todo" ("task", "description")
  VALUES($1, $2);`;
  console.log('In POST route:');
  console.log(queryText, queryArgs);

  pool  
    .query(queryText, queryArgs)
    .then((result) => {
      res.sendStatus(201);
    })
    .catch((error) => {
      console.error('Error in POST', error)
      res.sendStatus(500);
    });

});
// PUT

// DELETE

module.exports = router;
