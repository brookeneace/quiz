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

const File = mongoose.model('File', FileSchema);

module.exports = File

File.count({}, function(err, count) {
  if (err) {
    throw err;
  }
  // ...
  if (count > 0) return;

	const files = require('./file.seed.json');
	File.create(files, function(err, newFiles) {
		if (err) {
			throw err;
		}
		console.log("DB seeded")
	});
});