var express = require('express');
var router = express.Router();

/* GET home page. */
// router.get('/', function (req, res, next) {
//     res.render('index', {title: 'Express'});
// });
var routesToRedirect = [
    '/',
    '/about',
    '/services',
    '/contact',
    '/registration'
];

router.get(routesToRedirect, (request, response) => {
    response.render('index', {title: 'Express'});
});

module.exports = router;
