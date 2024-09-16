const express = require('express');
const UserController = require('../controller/users.controller');
const { SIGNUP_PREFIX, LOGIN_PREFIX } = require('../configs/app-config');

const router = express.Router();

router.post(SIGNUP_PREFIX,UserController.signUp)
router.post(LOGIN_PREFIX,UserController.signIn)

module.exports = router;