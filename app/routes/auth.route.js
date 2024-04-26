const controller = require("../controllers/auth.controller");

module.exports = (app) => {
    app.post(
        "/api/auth/genkey", controller.genkey
    );

    app.post(
        "/api/auth/signin", controller.signin
    );
};