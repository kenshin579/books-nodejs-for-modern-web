var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', {title: 'Express'});
});

router.get('/product', function (req, res) {
    res.render('product', {title: 'Product Page'});
});

router.get('/product/insert', function (req, res) {
    res.render('product/insert', {title: 'Insert Page'});
});

router.get('/product/edit', function (req, res) {
    res.render('product/edit', {title: 'edit Page'});
});

module.exports = router;
