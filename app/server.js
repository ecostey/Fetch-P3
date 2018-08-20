// require node modules:

const app = require('express')();
const logger = require('morgan');
const bodyParser = require('body-parser');


// require router connections
const dogRouter = require('./routes/DogRoutes');

const PORT = 3001;

// set up logger
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));



// set up routers
app.use('/dogs', dogRouter);

// set up server connection from port 3001
app.listen(PORT, () => console.log('listening on port: ', PORT));
