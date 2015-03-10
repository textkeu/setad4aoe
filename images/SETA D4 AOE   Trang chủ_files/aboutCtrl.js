angular
	.module('app')
	.controller('aboutCtrl', ['$scope', function($scope) {
		$scope.title = "Giới thiệu";
		$scope.author = "TextKeu";
		$scope.face = "images/textkeu.jpg";
		$scope.facebook = "https://www.fb.com/textkeu";
		$scope.gplus= "https://plus.google.com/+TextKeu";
		$scope.intro = "Code 4 fun";
	}]);