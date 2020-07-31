const templateRouter = require("express").Router();
const { GetTemplates } = require("../controllers/template");

templateRouter.route("/").get(GetTemplates);

module.exports = templateRouter;
