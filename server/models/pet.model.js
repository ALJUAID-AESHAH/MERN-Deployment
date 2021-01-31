const mongoose = require('mongoose');
const PetSchema = new mongoose.Schema({
	name: {
		type: String,
		required: [true, "{PATH} is required."],
		minlength: [3, "{PATH} must be at least {MINLENGTH} characters"]
	},
	type: {
		type: String,
		required: [true, "{PATH} is required."],
		minlength: [3, "{PATH} must be at least {MINLENGTH} characters"]
    },
    desc: {
		type: String,
		required: [true, "{PATH} is required."],
		minlength: [3, "{PATH} must be at least {MINLENGTH} characters"]
	},
	skill1: {
		type: String,
	},
	skill2: {
		type: String,
	},
	skill3: {
		type: String,
	},
},
	{ timestamps: true }
);
module.exports.Pet = mongoose.model('Pet', PetSchema);
