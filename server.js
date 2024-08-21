const express = require("express");
const cors = require("cors");
require('dotenv').config();

const app = express();

var corsOptions = {
    origin: "http://localhost:3000"
};

app.use(cors(corsOptions));

app.use(express.json());

app.use(express.urlencoded({extended: true}));

app.get("/", (req, res) => {
    res.json({ message: "Welcome to my default route"});
});

require("./app/routes/auth.route")(app);
require("./app/routes/user.route")(app);

const db = require("./app/models");
db.sequelize.sync({ force: false }).then(() => {
    console.log("Database sync...");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log("Server running on port " + PORT);
});