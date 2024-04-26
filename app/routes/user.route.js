const { authJwt } = require("../middleware");
const controller = require("../controllers/user.controller");

module.exports = (app) => {
    app.get("/api/home", controller.home);
    app.get("/api/user", [authJwt.verifyToken], controller.user);
    app.get("/api/admin",
        [authJwt.verifyToken, authJwt.isAdmin],
        controller.admin);
}