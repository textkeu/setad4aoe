angular
	.module('app')
	.controller('articleCtrl', ['$scope', '$stateParams', 'Article', function($scope, $stateParams, Article){
		Article.getArticle($stateParams.slug).then(function(data){
			$scope.article = data;
		});
	}]);