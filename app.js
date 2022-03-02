const express = require("express");
// const formData = require("express-form-data");
// const morgan = require("morgan");

// const routes = require("./router/routes.js");

const errorHandler = require("./utils/errorHandler.js");

const app = express();

// Set template engine
app.set("view engine", "ejs");

// Config middlewares for api
// const options = {
//     uploadDir: os.tmpdir(),
//     autoClean: true,
// };

// parse data with connect-multiparty.
app.use(express.json());
// app.use(formData());
// app.use(morgan("dev"));

// Public static files
app.use(express.static("public"));

// Initiail route for mounting
// app.use("/", routes);

// Error handler for whole app
app.use(errorHandler);

module.exports = app;
