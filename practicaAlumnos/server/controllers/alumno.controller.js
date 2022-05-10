const Alumno = require("../models/alumno.model");
const alumnoRoutes = require("../routes/alumno.routes");

module.exports.create_student = (req, res) =>{
    Alumno.create(req.body)
        .then(alumno => res.json(alumno))
        .catch(err=> res.json({message:"Hubo un error "+ err}));
}

module.exports.get_all = (req,res)=>{
    Alumno.find()
        .then(alumno => res.json(alumno))
        .catch(err=> res.json({message: "Hubo un error"+err}));
}

module.exports.get_student = (req,res) => {
    Alumno.findOne({_id: req.params.id})
        .then(alumno => res.json(alumno))
        .catch(err=> res.json({message:"Hubo un error"+err}));
}

module.exports.update_student = (req, res) => {
    Alumno.findByIdAndUpdate({_id: req.params.id}, req.body, {new:true, runValidators:true})
        .then(alumno => res.json(alumno))
        .catch(err => res.json({message: "Hubo un error "+ err}));
}

module.exports.delete_student = (req, res) => {
    Alumno.deleteOne({_id: req.params.id})
        .then(result => res.json(result))
        .catch(err=> res.json({message:"Hubo un error "+err})); 
}