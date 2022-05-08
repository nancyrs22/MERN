const BromaController = require("../controllers/broma.controller");

module.exports = app => {
    app.get("/api/bromas/",BromaController.findAllJokes);
    app.get("/api/bromas/:id",BromaController.findOneJoke);
    app.post("/api/bromas/new",BromaController.createJoke);
    app.put("/api/bromas/update/:id",BromaController.updateJoke);
    app.delete("/api/bromas/delete/:id",BromaController.deleteJoke);
}