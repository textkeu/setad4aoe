angular
	.module('app')
	.controller('rankCtrl', ['$scope', 'Rank', function($scope, Rank) {
		$scope.title = "Bảng xếp hạng";

		Rank.getRank().then(function(data){
			$scope.teams = data;
		});
	}]);