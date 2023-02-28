const {Schema, model} = require('mongoose');
const UserSchema = new Schema({
    nombre: {
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: true
    },
    rol:{
        type: String,
        upercase: true.valueOf,
        default: 'ROLE_ALUMNO'
        
    },
    cursos:{
        type: Array,
        default: []
    }
})
module.exports = model('User', UserSchema);