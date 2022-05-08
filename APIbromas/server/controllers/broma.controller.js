const Broma = require("../models/broma.model");

module.exports.findAllJokes = (req,res)=>{
    Broma.find()
        .then(allJokes => res.json({bromas:allJokes}))
        .catch(err=> res.json({message: "Hubo un error "+err}))
};

module.exports.findOneJoke = (req,res) =>{
    Broma.findOne({_id: req.params.id})
    .then(joke => res.json({broma:joke}))
    .catch(err=> res.json({message: "Hubo un error "+err}))
}

module.exports.createJoke = (req,res)=>{
    Broma.create(req.body)
    .then(joke => res.json({broma:joke}))
    .catch(err=> res.json({message: "Hubo un error "+err}))
}

module.exports.updateJoke = (req,res) =>{
    Broma.findOneAndUpdate({_id: req.params.id}, req.body, {new:true})
        .then(student => res.json({broma: joke}))
        .catch(err=> res.json({message: "Hubo un error "+err}))
}
module.exports.deleteJoke = (req, res) => {
    Broma.deleteOne({_id: req.params.id})
        .then(result => res.json({result: result}))
        .catch(err=> res.json({message: "Hubo un error "+err}))
}
