angular
	.module('app')
	.controller('homeCtrl', ['$scope', 'Rank', function($scope, Rank) {
		$scope.title = "Trang chủ";

		Rank.getRank().then(function(data){
			$scope.teams = data;
		});
	}]);