const mongoose = require('mongoose');

module.exports = {
	list:function(req,res,next){
		mongoose.model('File').find({}, function(err, files) {
		if (err) {
		console.log(err);
		res.status(500).json(err);
		}
		
		res.json(files);
		});
	},
	
	//something else will go here
	
	// Update a file
  update: function(req, res, next) {
    const fileId = req.params.fileId;
    const updatedFile = req.body.file;

    mongoose.model('File').findById(fileId, function(err, file) {
      if (err) {
        console.log(err);
        res.status(500).json(err);
      }

      file.title = updatedFile.title;
      file.filename = updatedFile.filename;

      file.save(function(err, file) {
        if (err) {
          console.log(err);
          res.status(500).json(err);
        }

        res.json(file);
      });
    });
  },
  
 // Delete a file
  delete: function(req, res, next) {
    const fileId = req.params.fileId;

    mongoose.model('File').findById(fileId, function(err, file) {
      if (err) {
        console.log(err);
        res.status(500).json(err);
      }

      file.remove(function(err, file) {
        if (err) {
          console.log(err);
          res.status(500).json(err);
        }

        res.json(file);
      })
    })
  }

  
  
}