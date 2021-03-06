const express = require('express');
const app = express();

const passport = require('passport');

const mongoose = require('mongoose');
const keys = require('./config/keys');

const users = require('./routes/apis/users');
const profile = require('./routes/apis/profile');
const posts = require('./routes/apis/posts');

//Body parser config
app.use(express.urlencoded({extended: true})); 
app.use(express.json());

//Passport config
app.use(passport.initialize());
require('./config/passport')(passport);

//Let's write our first route
app.get('/', (req,res) => res.send("Hello World!"));

//use routes
app.use('/api/users',users);
app.use('/api/profile',profile);
app.use('/api/posts',posts);

const port = 5000;
app.listen(port, () => console.log(`Server is running on port ${port}`));

//Db config
const db = keys.mongoURI;
mongoose.connect(db)
        .then(() => console.log('MongoDB connected'))
        .catch(err => console.log(err))

        
