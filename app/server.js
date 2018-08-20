// require node modules:

const app = require('express')();
const logger = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');


// require router connections
const dogRouter = require('./routes/DogRoutes');
const gradesRouter = require('./routes/GradesRoutes');

const PORT = 3001;

// set up logger
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());


// set up routers
app.use('/dogs', dogRouter);
app.use('/grades', gradesRouter);

// set up server connection from port 3001
app.listen(PORT, () => console.log('listening on port: ', PORT));
