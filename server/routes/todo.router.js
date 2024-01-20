const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');

// GET
router.get('/', (req, res) => {
  const dbQuery = 'SELECT * FROM "todo" ORDER BY "id";';

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
  console.log('In POST route:');
  const newTask = req.body;
  const queryArgs = [newTask.task, newTask.description];
  const queryText = `
  INSERT INTO "todo" ("task", "description")
  VALUES($1, $2);`;
  console.log(queryText, queryArgs);

  pool  
    .query(queryText, queryArgs)
    .then((result) => {
      res.send('Added item in POST:').status(201);
    })
    .catch((error) => {
      console.error('Error in POST', error)
      res.sendStatus(500);
    });

});
// PUT
router.put('/:id', (req, res) => {
  const updateItem = parseInt(req.params.id);
  let queryText = 'UPDATE "todo" SET "completed" = NOT "completed" WHERE "id" = $1;';
  console.log('itemId', updateItem)

  pool
    .query(queryText, [updateItem])
    .then((result) => {
      res.send('Task UPDATED:').status(201);
    })
    .catch((error) => {
      console.error('ERROR in PUT:', error);
      res.sendStatus(500);
    });
});

// DELETE
router.delete('/:id', (req, res) => {
  console.log('In DELETE route');
  const deleteId = parseInt(req.params.id);
  const queryText = `DELETE FROM "todo" WHERE id = ${deleteId};`;

  pool
    .query(queryText)
    .then((result) => {
      res.send('Item Deleted:').status(201);
    })
    .catch((error) => {
      console.error('ERROR in Delete:');
      res.sendStatus(500);
    });
})

module.exports = router;
