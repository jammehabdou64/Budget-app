const express = require("express");
const dotenv = require("dotenv");
const Routers = require("./routes");
const cors = require("cors");
const config = require("config");
function myAppHandler() {
  dotenv.config();
  const app = express();
  //middleware
  app.use(express.json());
  app.use(cors());

  //db
  require("../database")();
  const Routes = new Routers(app, express);

  const listen = function () {
    const port = process.env.PORT || config.get("port");
    app.listen(port, () =>
      console.log(`Server running on port: http://localhost:${port} `)
    );
  };
  return { listen, app, Routes };
}

module.exports = myAppHandler();
