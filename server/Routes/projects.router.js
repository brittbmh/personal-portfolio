const express = require('express');
const pool = require('../modules/pool');

const router = express.Router();

router.get('/', (req, res) => {
    const queryText = `SELECT *, projects.id as id, projects.name as name, tags.name as tag_name FROM projects 
                        JOIN tags ON projects.tag_id = tags.id  
                        ORDER BY projects.id DESC;`;
    pool.query(queryText).then((result) => {
        res.send(result.rows);
    }).catch((error) => {
        console.log('error in GET /projects', error);
        res.sendStatus(500);
    })
});

module.exports = router;