const mongoose = require('mongoose');

module.exports = {
	list:function(req,res,next){
		mongoose.model('Wine').find({}, function(err, wines) {
		if (err) {
		console.log(err);
		res.status(500).json(err);
		}
		
		res.json(wines);
		});
	},
	
	//something else will go here
	
	// Update a wine
  update: function(req, res, next) {
    const wineId = req.params.wineId;
    const updatedwine = req.body.wine;

    mongoose.model('Wine').findById(wineId, function(err, wine) {
      if (err) {
        console.log(err);
        res.status(500).json(err);
      }

      wine.title = updatedwine.title;
      wine.winename = updatedwine.winename;

      wine.save(function(err, wine) {
        if (err) {
          console.log(err);
          res.status(500).json(err);
        }

        res.json(wine);
      });
    });
  },
  
 

  
  
}