const express    = require('express');
const path       = require('path');
const morgan     = require('morgan');
const mongoose   = require('mongoose');
const bodyParser = require('body-parser');

const routes     = require('./routes');

const app        = express();

mongoose.connect('mongodb://localhost/todo',{ useMongoClient: true });

app.set('view engine', 'pug');
app.set('views'      , path.resolve(__dirname, 'views'));

app.use(express.static(path.resolve(__dirname, 'public')));
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(routes);


app.listen(8081, 'localhost', () => {
  console.log(`Server port:8081`);
});
