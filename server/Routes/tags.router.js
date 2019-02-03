const express = require('express');
const pool = require('../modules/pool');

const router = express.Router();

// get tags list from database
router.get('/', (req, res) => {
    const queryText = `SELECT * FROM tags ORDER BY id DESC;`;
    pool.query(queryText).then((result) => {
        //send results to redux store
        res.send(result.rows);
    }).catch((error) => {
        console.log('error in GET /tags', error);
        res.sendStatus(500);
    })
});

module.exports = router;