const mongoose = require('mongoose');

module.exports = {
	list:function(req,res,next){
		mongoose.model('Wine').find({}, function(err, files) {
		if (err) {
		console.log(err);
		res.status(500).json(err);
		}
		
		res.json(files);
		});
	},
	
	// Store the answer in the database
  create: function(req, res, next) {
    const newWine = req.body.wine;

    const newWineModel = new Wine(newWine);
    newWineModel.save(function (err) {
      if (err) {
        console.log(err);
        res.status(500).json(err);
      } else {
        res.json(newWineModel);
      }
    });
  },
  
}