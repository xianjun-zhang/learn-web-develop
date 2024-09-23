const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        set: (value) => {
            return bcrypt.hashSync(value, 10);
        }
    }
});

const User = mongoose.model('User', userSchema);


module.exports = User;