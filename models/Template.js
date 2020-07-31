const mongoose = require("mongoose");

const TemplateSchema = new mongoose.Schema({
	someField: {
		type: String,
		required: [true, "some field is required!"],
	},
	someOtherField: {
		type: String,
	},
});

module.exports = mongoose.model("Template", TemplateSchema);
