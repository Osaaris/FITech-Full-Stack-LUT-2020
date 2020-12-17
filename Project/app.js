const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const cors = require("cors");
const passport = require("passport");
const mongoose = require("mongoose");
const config = require("./config/database");

// Database Connect
mongoose.connect(config.database, { useNewUrlParser: true });

// Database Connection
mongoose.connection.on("connected", () => {
    console.log("Database connected to " + config.database);
});

// Database Error
mongoose.connection.on("error", (err) => {
    console.log("Database error " + err);
});

const app = express();
const users = require("./routes/users");
const port = 3000;

// CORS Middleware
app.use(cors());

// Body Parser Middleware
app.use(bodyParser.json());

// Passport Middleware
app.use(passport.initialize());
app.use(passport.session());

require("./config/passport")(passport);

app.use("/users", users);

// Set Static Folder
app.use(express.static(path.join(__dirname, "public")));

// Server Start
app.listen(port, () => {
    console.log("Server running on port " + port);
});