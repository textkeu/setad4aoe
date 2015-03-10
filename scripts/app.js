angular
	.module('app', [
		'ui.router',
		'ngMaterial',
		'ngSanitize'
		])
	.config(['$urlRouterProvider', '$stateProvider', '$mdThemingProvider', function($urlRouterProvider, $stateProvider, $mdThemingProvider){
		$mdThemingProvider.theme('blue');

		$urlRouterProvider.otherwise('/');

		$stateProvider
			.state('trang-chu', {
				title: 'Trang chủ',
				url: '/',
				templateUrl: 'templates/home.html',
				controller: 'homeCtrl'
			})
			.state('tin-tuc', {
				title: 'Tin tức',
				url: '/tin-tuc',
				templateUrl: 'templates/news.html',
				controller: 'newsCtrl'
			})
			.state('bai-viet', {
				title: 'Tin tức',
				url: '/tin-tuc/:slug',
				templateUrl: 'templates/newsdetail.html',
				controller: 'articleCtrl'
			})
			.state('bang-xep-hang', {
				title: 'Bảng xếp hạng',
				url: '/bang-xep-hang',
				templateUrl: 'templates/rank.html',
				controller: 'rankCtrl'
			})
			.state('lich-thi-dau', {
				title: 'Lịch thi đấu',
				url: '/lich-thi-dau',
				templateUrl: 'templates/schedule.html',
				controller: 'scheduleCtrl'
			})
			.state('thanh-vien', {
				title: 'Thành viên',
				url: '/thanh-vien',
				templateUrl: 'templates/members.html',
				controller: 'membersCtrl'
			})
			.state('luat-thi-dau', {
				title: 'Luật thi đấu',
				url: '/luat-thi-dau',
				templateUrl: 'templates/rulePlay.html',
				controller: 'rulePlayCtrl'
			})
			.state('gioi-thieu', {
				title: 'Giới thiệu',
				url: '/gioi-thieu',
				templateUrl: 'templates/about.html',
				controller: 'aboutCtrl'
			})
	}])
	.run(['$location', '$rootScope', function($location, $rootScope) {
		$rootScope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams, error){
			if (toState.title=="Article") {
				$rootScope.webtitle = "SETA D4 AOE : " + toState.title + " : " +toParams.slug;

			}else{
				$rootScope.webtitle = "SETA D4 AOE : " +  toState.title
				$rootScope.title = toState.title;			
			}
		});
	}])
	.controller('mainCtrl', function($scope, $timeout, $mdSidenav, $log) {
	  $scope.toggleLeft = function() {
	    $mdSidenav('left').toggle();
	  };
	})
	.controller('LeftCtrl', function($scope, $timeout, $mdSidenav, $log) {
	  $scope.close = function() {
	    $mdSidenav('left').close();
	  };
	})
