const ErrorResponse = require("../utils/errorResponse");

const errorHandler = (err, req, res, next) => {
	const error = { ...err };

	if (!error.statucCode) {
		error = new ErrorResponse(err.message, 500);
	}

	res.status(error.statucCode).json({ success: false, error: error.message });
};

module.exports = errorHandler;
