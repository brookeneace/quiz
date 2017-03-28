angular.module("fileList").component("fileList",{
  templateUrl: "/js/template/wine.template.html",
  controller: function FileListController($http){
    var self = this;
	

	this.getWines = () => {
	  return $http.get("/files").then(function(response){
	    return self.files=response.data;
	  });
	}
	this.getWines();
	
	 this.createAnswer = () => {
      this.selectedFile = {
        filename: "",
        title: ""
      };
    }
	     	    
  }
});
