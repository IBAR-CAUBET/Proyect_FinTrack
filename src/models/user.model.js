const { mongoose, Schema } = require('mongoose');

const UserSchema = Schema({
    name: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        minlength: 6,
    },
    age: {
        type: Number,
        required: true,
        min: 18
    },
    rol: {
        type: String,
        enum: ["ADMIN", "USER"],
        default: "USER"
    },
    typePerfil: {
        type: String,
        enum: ["CONSERVADOR", "MODERADO", "AGRESIVO"],
        default: 'CONSERVADOR',
    },
})

const User = mongoose.model("User", UserSchema)

module.exports = User;