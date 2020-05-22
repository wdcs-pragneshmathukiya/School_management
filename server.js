console.log("Server running");

const config = require("./lib/config");
const superAdminCreate = require("./lib/superAdmin/superAdmin");

config.dbConfig(config.cfg, (err) => {
    if (err) {
        console.log(err + "existing the app");
        return;
    }

    const express = require("express");

    const app = express();

    app.locals.rootDir = __dirname;

    config.expressConfig(app, config.cfg.envionment);
    if (err) return res.json(err);

    superAdminCreate.superAdminCreate();

    require("./lib/router")(app);

    app.listen(config.cfg.port, () => {
        console.log(`Express server listening on ${config.cfg.port} in ${config.cfg.TAG} mode.`);
    })
});