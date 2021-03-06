const mongoose = require('mongoose');
const schema = mongoose.Schema;


const user_schema = new schema ({
  name : {
    type : String,
    required : true
  },
  email : {
    type : String,
    required : true
  },
  password : {
    type : String,
    required : true
  },
  avatar : {
    type : String
  },
  date : {
    type : Date,
    default : Date.now
  }
});

const User = mongoose.model('users',user_schema);
module.exports = User;