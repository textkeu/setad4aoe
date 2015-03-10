angular
	.module('app')
	.factory('Member', ['$http', function($http){
		return {
			get: function(){
				return $http.get('api/member.json').then(function(response){
					return response.data;
				});
			},
			getAllMembers: function(){
				return $http.get('api/member.json').then(function(response){
					var teams =  response.data.teams;
					var index = 0;
					var memberList = [];
					for (var i = 0; i< teams.length; i++) {
						var members = teams[i].members
						for (var j = 0; j < members.length; j++) {
							memberList[index++] = members[j];
						};
					};
					return memberList;
				});
			},
			getAllTeams: function(){
				return $http.get('api/member.json').then(function(response){
					return response.data.teams;
				});
			}
		};
	}])