// eslint-disable-next-line new-cap
const router = require('express').Router();

router.get('/get-map-info', (req, res) => {
  if (req.query.lng === 'en') {
    res.send(require('./map-info-en.json'));
  } else {
    res.send(require('./map-info-ru.json'));
  }
});

module.exports = router;
