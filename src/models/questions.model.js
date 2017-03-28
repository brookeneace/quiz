// Load mongoose package
const mongoose = require('mongoose');

const FileSchema = new mongoose.Schema({
  qname: String,
  choose1: String,
  choose2: String,
  choose3: String,
  choose4: String,
  updated_at: { type: Date, default: Date.now },
});

const WineSchema = new mongoose.Schema({
  winename: String,
  winedesc: String,
  updated_at: { type: Date, default: Date.now },
});

const File = mongoose.model('File', FileSchema);

const Wine = mongoose.model('Wine', WineSchema);

module.exports = File

module.exports = Wine

File.count({}, function(err, count) {
  if (err) {
    throw err;
  }
  // ...
  if (count > 0) return;

	const files = require('./questions.seed.json');
	File.create(files, function(err, newFiles) {
		if (err) {
			throw err;
		}
		console.log("DB seeded")
	});
});

Wine.count({}, function(err, count) {
  if (err) {
    throw err;
  }
  // ...
  if (count > 0) return;

	const wines = require('./wine.seed.json');
	Wine.create(wines, function(err, newWines) {
		if (err) {
			throw err;
		}
		console.log("Wine DB seeded")
	});
});