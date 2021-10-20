// eslint-disable-next-line new-cap
const router = require('express').Router();

router.use(require('./carousel'));
router.use(require('./map'));
router.use('/auth', require('./auth'));
router.use(require('./prices'));

module.exports = router;
