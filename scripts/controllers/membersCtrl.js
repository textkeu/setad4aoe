angular
	.module('app')
	.controller('membersCtrl', ['$scope', 'Member', function($scope, Member) {
		$scope.title = "Thành viên";

		Member.getAllMembers().then(function(data){
			$scope.members = data;
		});

		Member.getAllTeams().then(function(data){
			$scope.teams = data;
		});
	}]);