// Load mongoose package
const mongoose = require('mongoose');

const WineSchema = new mongoose.Schema({
  winename: String,
  description: String,
  updated_at: { type: Date, default: Date.now },
});

const Wine = mongoose.model('Wine', WineSchema);

module.exports = Wine

Wine.count({}, function(err, count) {
  if (err) {
    throw err;
  }
  // ...
  if (count > 0) return;

	const wines = require('./file.seed.json');
	Wine.create(wines, function(err, newWines) {
		if (err) {
			throw err;
		}
		console.log("DB seeded")
	});
});