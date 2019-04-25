const express = require('express');
const morgan = require('morgan');
const { db } = require('./models');


const { addPage, editPage, main, userList, userPages, wikiPage } = require('./views/index');

const app = express();

app.use(morgan('dev'));
app.use(express.static(__dirname + 'public'));
app.use(express.urlencoded({ extended: false}));
// parses json bodies
app.use(express.json());


db.authenticate().
then(() => {
    console.log('connected to the database');
});


app.get('/', async (req, res) => {
    await res.send(main('LOL'));
});


const PORT = 1337;

app.listen(PORT, () => {
    console.log('App listening');
});