
var app = angular.module('blog', []);

//This controller is responsible for sending get request to server
app.controller('BlogFormController', ['$scope', '$http',
  function ($scope, $http) {
    $scope.update = function(user) {
    	$http.post('api/blog', $scope.blog, function(req, res){
        //this post sends the contents of the form to routes, which will in turn write the form data to mongodb
       // console.log(req.body); //uncomment this to debug post
    	});
    };

    $scope.reset = function() {
      //This function should empty all the fields
    };
    $scope.reset();
}]);

//This controller is responsible for retriving database entries for blog
app.controller('BlogController', ['$scope', '$http',
  function ($scope, $http) {

  
  	//triggers an event which will get the blog posts at the index
  	//Index is based on an offset value 'ItemsPerPage', /blog/0 getting posts 1 to ItemsPerPage.
   	$scope.pageCall = function(numberToPull){
   		pageIndex = numberToPull;
   		console.log('InsidePageCall nested function');
   		$http.get('api/blog/' + pageIndex).success(function(data) {
    		$scope.BlogPosts = data;
    	});
   	};
	
   	//initial triggered event populating temporary data
	$http.get('api/blog/' + pageIndex).success(function(data) {
    	$scope.BlogPosts = data;
    	console.log('inside initial http call');
   	});
    $scope.ItemsPerPage = 10;
    console.log(pageIndex);


}]);


pageIndex = 0;