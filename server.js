const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const cors = require('cors')

require('dotenv').config();
require('./config/database');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }))
app.use(favicon(path.join(__dirname, 'build', 'favicon.ico')));
app.use(express.static(path.join(__dirname, 'build')));
const corsOptions = {
  origin:'http://localhost:3000',
}
app.use(cors(corsOptions))


app.use(require('./config/checkToken'));

app.use('/api/users', require('./routes/api/users'))
app.use('/api/jobs', require('./routes/api/jobs'))
const ensureLoggedIn = require('./config/ensureLoggedIn')
// app.use('/api/items',ensureLoggedIn, require('./routes/api/items'))


app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

const port = process.env.PORT || 3001;

app.listen(3001, function() {
  console.log(`Express app running on port ${port}`)
});