var express = require('express');
var mongoose = require('mongoose');
var router = express.Router();
var UserSchema = require('app/mongoose/schema/userinfo');

/* User's registration */
router.post('/signup', function (req, res, next) {
    var {firstname, lastname, email, password} = req.body;
    var RegUser = mongoose.model('RegUser', UserSchema);
    RegUser.create({firstname, lastname, email, password}, (err, newUser) => {
        if(err) return next(err);
        req.session.user = email;
        return res.json({status: "SUCCESS", message: "User was successfully signed up"});
    });
});


router.post('/login', function (req, res, next) {
    var {email, password} = req.body;
    UserSchema.findOne({email, password}, (err, user) => {
        if(err) return next(err);
        if(!user) return res.send({status: "FAILURE", message: "User has incorrect password or email"});
        
        req.session.user = email;
        return res.send({ status: "SUCCESS", message: "User was successfully logged in"});
    })
});

module.exports = router;
