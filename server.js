const myApp = require("./vendor/framework");

require("./routes/api");

const path = require("path");
const express = require("express");
const app = express();

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
app.get("*", (req, res) => {
  return res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
});
myApp.listen();
