// eslint-disable-next-line new-cap
const router = require('express').Router();

router.post('/registration', (req, res) => {
  if (req.body.phone && req.body.login && req.body.pass) {
    if (!req.session[req.body.login]) {
      const ret = {
        login: req.body.login,
        pass: req.body.pass,
        phone: req.body.phone,
        status: 'success',
      };
      req.session[req.body.login] = ret;
    } else if (req.session[req.body.login]) {
      return res.send(require('./dooble.json'));
    }
    return res.send(require('./success.json'));
    // return res.send(req.session);
  }
  res.send(require('./error.json'));
});

module.exports = router;
