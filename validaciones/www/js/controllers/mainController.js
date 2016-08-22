app.controller('mainController', [ '$scope', '$state',

function($scope, $state) {

	$scope.validaciones = {
		minlength : 3,
		msj_minlength : 'Numero muy chico',
		maxlength : 10,
		msj_maxlength : 'Numero muy grande',
		pattern : '^[0-9]+(\.[0-9]{1,2})?$',
		msj_pattern : 'Ingrese un numero valido. Ej: 129.50',
	};

	$scope.guardar = function() {
		console.log($scope.numero);
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