angular
	.module('app')
	.controller('newsCtrl', ['$scope', 'Article', function($scope, Article) {
		$scope.title = "Tin tức";

		Article.getArticles().then(function(data){
			$scope.articles = data;
		});
	}]);