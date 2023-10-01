const router = require('express').Router();
const auth = require('../middlewares/auth');

router.use('/singup', require('./signup'));
router.use('/singin', require('./signin'));
router.use('/cards', auth, require('./cards'));
router.use('/users', auth, require('./users'));

module.exports = router;
