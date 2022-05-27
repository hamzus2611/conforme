const express = require('express');
const { Register, Login, getuserinfo } = require('../contollers/User.constrollers');

const route = express.Router();
route.post('/register',Register)
route.post('/login',Login)
route.get('/getuserinfo',getuserinfo)
module.exports = route