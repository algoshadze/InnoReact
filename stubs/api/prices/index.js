// eslint-disable-next-line new-cap
const router = require('express').Router();

router.get('/get-prices', (req, res) => {
  if (req.query.lng === 'en') {
    res.send(require('./prices-en.json'));
  } else {
    res.send(require('./prices-ru.json'));
  }
});

module.exports = router;
