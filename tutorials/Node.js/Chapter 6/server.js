const express = require('express');
const app = express();
const path = require('path');
const cors = require('cors');
const corsOptions = require('./config/corsOptions')
const {logger} = require('./middleware/logEvents')
const errorHandler = require('./middleware/errorHandler')
const PORT = process.env.PORT || 3500;

// Create custom logging middleware
app.use(logger);

// grab cors options from file and apply to cors
app.use(cors(corsOptions));

// built-in middleware to handle urlencoded data
// Ex: content-type: application/x-www-form-urlencoded
app.use(express.urlencoded({extended: false}));

// built in middleware for json
app.use(express.json());

// static files
// default directory is the '/'
app.use(express.static(path.join(__dirname, '/public')));

// set routes
app.use('/', require('./routes/root'));
app.use('/employees', require('./routes/api/employees'));


// app.use()
// catch-all route handler for other routes not accounted for
app.all(/^\/.+$/, (req, res) => {
    res.status(404)
    if (req.accepts('html')) {
        res.sendFile(path.join(__dirname, 'views', '404.html'));
    } else if (req.accepts('json')) {
        res.sendFile({error: '404 Not Found'});
    } else {
        res.type('txt').send('404 Not Found');
    }
    
});

// custom error handler
app.use(errorHandler);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));