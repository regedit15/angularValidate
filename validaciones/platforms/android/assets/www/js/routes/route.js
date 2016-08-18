app.config([ '$stateProvider', '$urlRouterProvider',

function($stateProvider, $urlRouterProvider) {

	$stateProvider.state('inicio', {
		url : '/inicio',
		templateUrl : 'home.html',
		controller : 'mainController',
		authenticate : false
	}).state('acercaDe', {
		url : '/acercaDe',
		templateUrl : 'acercaDe.html',
		controller : 'mainController',
		authenticate : false
	});

	$urlRouterProvider.otherwise('/inicio');
} ]);