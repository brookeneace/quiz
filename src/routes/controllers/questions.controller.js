const mongoose = require('mongoose');

module.exports = {
	list:function(req,res,next){
		mongoose.model('Question').find({}, function(err, questions) {
		if (err) {
		console.log(err);
		res.status(500).json(err);
		}
		
		res.json(questions);
		});
	},
	
	
// Create a quiz answer in the database
/*
  create: function(req, res, next) {
    const newFile = req.body.file;

    const newFileModel = new File(newFile);
    newFileModel.save(function (err) {
      if (err) {
        console.log(err);
        res.status(500).json(err);
      } else {
        res.json(newFileModel);
      }
    });
  }
*/

  
  
}