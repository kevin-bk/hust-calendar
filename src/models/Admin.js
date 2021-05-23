const AdminSchema = require('./schemas/admin');

module.exports = {
    create: function(admin, callback) {
        Admin = new AdminSchema(admin);
        Admin.save()
            .then(() => callback());
    },

    Authenticate: function(username, password, callback) {
        AdminSchema.findOne({ username: username, password: password })
            .then(admin => {
                callback(admin._id);
            })
            .catch(err => callback(false));
    },
}
