const express = require('express');
const router = express.Router();


//@route   POST  api/users/register
//@desc    Register a user
//@access  Public
router.get('/register',(req,res) => res.json({
  msg: 'user route works!'
}));

module.exports = router;