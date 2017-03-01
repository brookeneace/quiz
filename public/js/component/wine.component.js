angular.module("wineQuiz").component("wineQuiz",{
  templateUrl: "/js/template/wine.template.html",
  controller: function wineController($http){
    var self = this;
    $http.get("/results").then(function(response){
      self.wines=response.data;
    });
  }
});
