const { model, Schema} = require('mongoose');

const UsuarioSchema = new Schema({
    nombre: {type : String, required : true},
    correo: {type : String, required : true, unique : true},
    contraseña: {type : String, required : true},
    tipo: {type : Number, required : true},




});

module.exports = model('Usuario', UsuarioSchema);
