angular
	.module('app')
	.controller('scheduleCtrl', ['$scope', 'Match', function($scope, Match) {
		$scope.title = "Lịch thi đấu";

		Match.getMatches().then(function(data){
			$scope.qualifying = data.qualifying;
			$scope.finalMatch = data.final;
		});
		
		$scope.openUrl = function(url) {
		    if(url != ''){
		        window.location.pathname = "#"+url;    
		    }
        };
	}]);
