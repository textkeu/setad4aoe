angular
	.module('app')
	.factory('Article', ['$http', function($http){
		return {
			getArticles: function(){
				return $http.get('api/articles.json').then(function(response){
					return response.data.articles;
				});
			},
			getArticle: function(slug){
				return $http.get('api/article/'+slug+'.json').then(function(response){
					return response.data;
				});
			}
		};
	}])