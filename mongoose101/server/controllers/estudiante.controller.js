const { model } = require("mongoose");
const Estudiante = require("../models/estudiante.model");

module.exports.findAllStudents = (req,res)=>{
    Estudiante.find()
        .then(allStudents => res.json({estudiantes:allStudents}))
        .catch(err=> res.json({message: "Hubo un error "+err}));
};

module.exports.findOneStudent = (req, res) => {
    Estudiante.findOne({_id: req.params.id})
        .then(student => res.json({estudiante: student}))
        .catch(err=> res.json({message: "Hubo un error"+err}));
}

module.exports.createStudent = (req,res) => {
    Estudiante.create(req.body)
        .then(student => res.json({estudiante: student}))
        .catch( err=> res.json({message:"Hubo un error"+err}));
}

module.exports.updateStudent = (req,res) =>{
    Estudiante.findOneAndUpdate({_id:req.params.id},req.body,{new:true})
        .then(student => res.json({estudiante: student}))
        .catch( err=> res.json({message:"Hubo un error"+err}));
}

module.exports.deleteStudent = (req, res) => {
    Estudiante.deleteOne({_id: req.params.id})
        .then(result => res.json({result:result}))
        .catch(err => res.json({message:"Hubo un error"+err}))
}