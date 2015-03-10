angular
	.module('app')
	.factory('Match', ['$http', function($http){
		return {
			getMatches: function(){
				return $http.get('api/rank.json').then(function(response){
					return response.data.match;
				});
			}
		};
	}])