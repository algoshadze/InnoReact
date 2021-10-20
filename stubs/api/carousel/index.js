// eslint-disable-next-line new-cap
const router = require('express').Router();

router.get('/getBanners', (req, res) => {
  if (req.query.lng === 'en') {
    res.send(require('./carousel-en.json'));
  } else {
    res.send(require('./carousel-ru.json'));
  }
});

module.exports = router;
