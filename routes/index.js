'use strict';
var express = require('express');
var router = express.Router();
var path = require('path');

/* GET home page. */
router.get('/', function (req, res) {
    //res.render('index', { title: 'Express' });
    // res.render(path.join(__dirname, '/public', '/index.html'));
    res.status(200).render(path.join(__dirname, '../public', '/index.html'));
});

module.exports = router;
