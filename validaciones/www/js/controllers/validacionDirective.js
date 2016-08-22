app.directive('validacion', [

function() {
	return {
		templateUrl : 'validacionDirective.html',
		restrict : 'E',
		replace : true,
		scope : {
			'valor' : '=',
			'validaciones' : '=',
			'error' : '=',
		},

		// http://emailregex.com/
		// ^[-a-z0-9~!$%^&*_=+}{\'?]+(\.[-a-z0-9~!$%^&*_=+}{\'?]+)*@([a-z0-9_][-a-z0-9_]*(\.[-a-z0-9_]+)*\.(aero|arpa|biz|com|coop|edu|gov|info|int|mil|museum|name|net|org|pro|travel|mobi|[a-z][a-z])|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,5})?$

		link : function(scope, element, attrs) {

			function MinLengthException() {
			}

			function MaxLengthException() {
			}

			function PatternException() {
			}

			scope.$watch('valor', function(newValue, oldValue) {

				var validar = function() {
					if (!new RegExp(scope.validaciones.pattern).test(scope.valor)) {
						scope.mostrarPattern = true;
						scope.mostrarMinlength = false;
						scope.mostrarMaxlength = false;
						throw new PatternException();
					}

					if (scope.validaciones.minlength != null && scope.valor.length < scope.validaciones.minlength) {
						scope.mostrarMinlength = true;
						scope.mostrarPattern = false;
						scope.mostrarMaxlength = false;
						throw new MinLengthException();
					}

					if (scope.validaciones.maxlength != null && scope.valor.length > scope.validaciones.maxlength) {
						scope.mostrarMaxlength = true;
						scope.mostrarMinlength = false;
						scope.mostrarPattern = false;
						throw new MaxLengthException();
					}
				};

				if (scope.valor != null && scope.valor != '') {

					try {
						validar();
						scope.error = 1;
						scope.mostrarMaxlength = false;
						scope.mostrarMinlength = false;
						scope.mostrarPattern = false;

					} catch (e) {
						scope.error = -1;
					}

				} else {
					scope.error = 0;
				}
			});
		}
	}
} ]);