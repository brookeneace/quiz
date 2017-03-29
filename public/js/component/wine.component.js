angular.module("fileList").component("fileList",{
  templateUrl: "/js/template/wine.template.html",
  controller: function wineController($http){
    var self = this;
	
	this.selectWine = (wine) => {
      // get the currently selected file and set the `selected`
      // property to false
      const currentlySelected = this.selectedAnswers;
      this.selectedAnswers = null;

      // Mark the passed file as selected
      if (!currentlySelected || currentlySelected._id !== wine._id) {
        this.selectedAnswers = angular.copy(wine);
      }
    }

	this.getWines = () => {
	  return $http.get("/questions").then(function(response){
	    return self.wines=response.data;
	  });
	}
	this.getWines();
	
	 this.createAnswer = () => {
      this.selectedAnswers = {
        winename: "",
        winedesc: ""
      };
    }
	     	    
  }
});
