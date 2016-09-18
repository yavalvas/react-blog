var userInfoSchema = mongoose.Schema({
    firstname: String,
    lastname: String,
    email: String,
    password: String
});

module.exports = userInfoSchema;