var express = require('express');
var router = express.Router();

/* GET users listing. */
// router.get('/', function( req, res, next) {
//   res.send('Respondiendo desde la ruta de Raiz');
// });

router.get('/', function( req, res, next) {
  res.render('/shop');
});

module.exports = router;

  