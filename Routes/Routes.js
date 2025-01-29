const express = require('express');
const { login} = require('../Controller/Licontroller');
const {createUser}=require('../Controller/Controller')

const router = express.Router();

// Routes for login and sign-up
router.post('/login', login);
router.post('/signup', createUser);

module.exports = router;