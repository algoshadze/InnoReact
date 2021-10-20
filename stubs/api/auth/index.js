// eslint-disable-next-line new-cap
const router = require('express').Router();

router.use(require('./login'));
router.use(require('./registration'));

module.exports = router;
