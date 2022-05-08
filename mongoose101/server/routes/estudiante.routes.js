const EstudianteController = require("../controllers/estudiante.controller");

module.exports = app => {
    app.get("/api/estudiantes/",EstudianteController.findAllStudents);
    app.get("/api/estudiante/:id",EstudianteController.findOneStudent);
    app.post("/api/estudiante/new",EstudianteController.createStudent);
    app.put("/api/estudiantes/update/:id",EstudianteController.updateStudent);
    app.delete("/api/estudiante/delete/:id",EstudianteController.deleteStudent);
}

