const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = process.env.PORT || 5000;
const projectsRouter = require('./Routes/projects.router')
const tagsRouter = require('./Routes/tags.router')

/** ---------- MIDDLEWARE ---------- **/
app.use(bodyParser.json());
app.use(express.static('build'));
app.use(bodyParser.urlencoded({ extended: true }));


/** ---------- ROUTES ---------- **/
app.use('/api/projects', projectsRouter);
app.use('/api/tags', tagsRouter);

/** ---------- START SERVER ---------- **/
app.listen(port, function () {
    console.log('Listening on port: ', port);
});