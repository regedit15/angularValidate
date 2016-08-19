app.controller('mainController', [ '$scope', '$state',

function($scope, $state) {

	$scope.guardar = function() {
		alert('submit!');
	}

	$scope.volver = function(cantidad) {
		if ($state.current.name === 'inicio') {
			$state.go('acercaDe');
		} else {
			$state.go('inicio');
		}

	}

} ]);