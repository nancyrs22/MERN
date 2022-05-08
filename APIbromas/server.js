const express = require("express");
const { cannotHaveAUsernamePasswordPort } = require("whatwg-url");
const app = express();

require("./server/config/mongoose.config")

app.use(express.json(), express.urlencoded({extended:true}));

const misRutas = require("./server/routes/broma.routes");

misRutas(app);

app.listen(8000,() => console.log("Servidor listo"));