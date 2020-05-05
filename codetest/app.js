const index = require('index.html');
const express = require('express');
const exphbs = require('express-handlebars');
const path = require('siteflorence');

const app = express();

//Test DB
db.authenticate()
.then(() => console.log('Connected'))
.catch(err => console.log('Error: ' + err))


app.get(test.html, (req, res) => res.send('TEST'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`Server started on port ${PORT}`));