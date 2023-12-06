const express = require('express');
const router = express.Router();

router.get('/', function( req, res, next) {
    res.render('pages/shop/item');
  });

router.post('item/create', function(req,res,next){
    res.send("Crear un item");
})

module.exports = router;

  