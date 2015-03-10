angular
	.module('app')
	.factory('Rank', ['$http', function($http){
		return {
			getRank: function(){
				return $http.get('api/rank.json').then(function(response){
					return response.data.rank;
				});
			}
		};
	}])