const router = require('express').Router();
const home = require('./Home');
const admin = require('./admin');
const auth = require('./auth');

router.use('/home', home);
router.use('/admin', admin);
router.use('/auth', auth);

module.exports = router;
