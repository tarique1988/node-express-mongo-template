const mongoose = require("mongoose");

const username = process.env.USER;
const password = process.env.PASS;
const database = process.env.DB;
const host = process.env.HOST;

const ConnectDB = () => {
	mongoose.connect(
		`mongodb+srv://${username}:${password}@${host}/${database}?retryWrites=true&w=majority`,
		{ useUnifiedTopology: true, useNewUrlParser: true },
		(err) => {
			if (err) {
				console.log(err);
			} else {
				console.log(`DB is now connected!`);
			}
		}
	);
};

module.exports = ConnectDB;
