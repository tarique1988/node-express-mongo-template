const Template = require("../models/Template");
const asyncHandler = require("../middlewares/asyncHandler");

// description      Get all templates
// route            GET /api/templates
// access           Public/Private
exports.GetTemplates = asyncHandler(async (req, res, next) => {
	const templates = await Template.find();
	res.status(200).json({ success: true, data: templates });
});
