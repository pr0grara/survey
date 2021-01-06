"use strict";

var _path = _interopRequireDefault(require("path"));

var _express = _interopRequireDefault(require("express"));

var _flowers = _interopRequireDefault(require("./routes/flowers.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var PORT = process.env.HTTP_PORT || 4001;
var app = (0, _express["default"])();
app.use(_express["default"]["static"](_path["default"].join(__dirname, "client", "build")));
app.get("/", function (req, res) {
  res.send("just gonna send it");
});
app.get("/flower", function (req, res) {
  res.json({
    name: "Dandelion",
    color: "Blue-ish"
  });
});
app.use('/flowers', _flowers["default"]);
app.listen(PORT, function () {
  console.log("Server listening at port ".concat(PORT, "."));
});
