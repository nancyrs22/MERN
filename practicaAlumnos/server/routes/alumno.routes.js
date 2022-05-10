const { allowedNodeEnvironmentFlags } = require("process")
const AlumnoController = require("../controllers/alumno.controller")

module.exports = (app) => {
    app.get("/api/alumnos", AlumnoController.get_all);
    app.post("/api/alumnos", AlumnoController.create_student);
    app.get("/api/alumnos/:id", AlumnoController.get_student);
    app.put("/api/alumnos/:id",AlumnoController.update_student);
    app.delete("/api/alumnos/:id",AlumnoController.delete_student);
}