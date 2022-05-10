const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/adminalumnos",{
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(()=> console.log("Conectado con DB"))
    .catch( err => console.log("Error al conectarse con DB "+err) );