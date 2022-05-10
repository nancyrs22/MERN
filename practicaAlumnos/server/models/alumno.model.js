const mongoose = require("mongoose");

const EsquemaAlumno = new mongoose.Schema({
    nombre: String,
    apellido: String,
    edad: Number,
    correo: String

},{timestamps:true, versionKey:false});
//Timestamps: creando campos de createdAt y updatedAt
//versionKey: false estamos eliminando el atributo _v

const Alumno = mongoose.model("alumnos", EsquemaAlumno);

module.exports = Alumno;