var checkLogin = function(req, res, next) {
    if(!(req.session && req.session.user)) {
        return res.json({status: "FAILURE", message: "You should be logged in to contrinue"});
    }
    next();
};

module.exports = checkLogin;