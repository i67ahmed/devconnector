const express = require('express');
const app = express();

const mongoose = require('mongoose');
const keys = require('./config/keys');

const users = require('./routes/apis/users');
const profile = require('./routes/apis/profile');
const posts = require('./routes/apis/posts');

app.get('/', (req,res) => res.send("Hello World!"));

app.use('/api/users',users);
app.use('/api/profile',profile);
app.use('/api/posts',posts);

const port = 5000;
app.listen(port, () => console.log(`Server is running on port ${port}`));

const db = keys.mongoURI;
mongoose.connect(db)
        .then(() => console.log('MongoDB connected'))
        .catch(err => console.log(err))

        