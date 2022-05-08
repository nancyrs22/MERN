const mongoose = require("mongoose");

const EsquemaEstudiante = mongoose.Schema({
    nombre: String,
    apellido: String,
    edad: Number
});

const Estudiante = mongoose.model("estudiantes",EsquemaEstudiante);

module.exports = Estudiante;