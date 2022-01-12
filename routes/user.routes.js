const { Router } = require('express');
const usersControllers = require('../controllers/user.controllers');
const router = Router();

router.post('/signup',usersControllers.signUp);

module.exports = router;