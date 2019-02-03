const express = require('express');
const pool = require('../modules/pool');

const router = express.Router();

//get projects from database - join to get tag names from tags table
router.get('/', (req, res) => {
    const queryText = `SELECT *, projects.id as id, projects.name as name, tags.name as tag_name FROM projects 
                        JOIN tags ON projects.tag_id = tags.id  
                        ORDER BY projects.id DESC;`;
    pool.query(queryText).then((result) => {
        //send results to redux store
        res.send(result.rows);
    }).catch((error) => {
        console.log('error in GET /projects', error);
        res.sendStatus(500);
    })
});

//delete selected project from database projects table
router.delete('/:id', (req, res) => {
    const project = req.params.id;
    const queryText = `DELETE FROM projects WHERE id = $1;`;
    pool.query(queryText, [project]).then((response) => {
        res.sendStatus(200);
    }).catch((error) => {
        console.log('error in DELETE /projects', error);
        res.sendStatus(500);
    })
})

//post new projects to database projects table
router.post('/', (req, res) => {
    const project = req.body;
    const queryText = `INSERT INTO projects (name, description, website, github, date_completed, tag_id)
                        VALUES ($1, $2, $3, $4, $5, $6);`;
    pool.query(queryText, [project.name, project.desc, project.website, project.github, project.stateDate, project.tag_id])
    .then((response) => {
        res.sendStatus(201);
    }).catch((error) => {
        console.log('error in POST /projects', error);
        res.sendStatus(500);
    })
})

module.exports = router;