const express = require("express");
const app = express();
const fileUpload = require("express-fileupload");
const cookieParser = require("cookie-parser");
const index = require("./routes/index");
const api = require("./routes/api");
const morgan = require("morgan");

app.use(express.json());
app.use(cookieParser());
app.use(morgan("tiny"));
app.use(express.static("public"));
app.use("/uploads", express.static("uploads"));
app.use(fileUpload({
    createParentPath: true,
}));
app.set("view engine", "ejs");

app.use("/", index);
app.use("/api", api);

module.exports = app;