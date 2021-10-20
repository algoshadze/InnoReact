// eslint-disable-next-line new-cap
const router = require('express').Router();
// const forge = require('node-forge');

router.post('/login', (req, res) => {
  const login = req.session[req.body.login]['login'];
  const pass = req.session[req.body.login]['pass'];
  if (login === req.body.login && pass === req.body.pass) {
    return res.send(req.session[req.body.login]);
  }

  res.send(require('./error.json'));
});

// router.post('/login', (req, res) => {
//   const {pubkey} = req.body;
//   const parsedPubKey = forge.pki.publicKeyFromPem(pubkey);
//   const login = 'admin';
//   const buffer = forge.util.createBuffer(login, 'utf8').getBytes();
//   const encriptedLogin = parsedPubKey.encrypt(buffer, 'RSA-OAEP');
//   const encriptedLoginBase64 = forge.util.decode64(encriptedLogin);

//   const ans = require('./success.json');

//   _.set(ans, 'login', encriptedLoginBase64);
//   res.send(ans);
// });

module.exports = router;
