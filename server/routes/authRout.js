const express = require('express');
const router = express.Router();

const { loginControl,
        regControl,
        logoutControl, 
        sessionControl,
      } = require('../controllers/authControl');

router.post('/reg', regControl);
router.post('/login', loginControl);
router.get('/logout', logoutControl);
router.get('/session', sessionControl);

module.exports = router;
