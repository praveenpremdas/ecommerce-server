const router = require('express').Router();
const viewAllProducts = require('../controller/viewAllProduct');
const userDetails = require('../controller/userDetails');

router.get('/', viewAllProducts);
router.post('/userdetials', userDetails);

module.exports = router;
