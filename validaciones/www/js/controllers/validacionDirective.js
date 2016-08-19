app.directive('validacion', [

function() {
	return {
		templateUrl : 'validacionDirective.html',
		restrict : 'E',
		replace : true,
		scope : {
			'valor' : '=',
			'minlength' : '=',
			'maxlength' : '=',
			'pattern' : '@',
			'error' : '=',
		},

		link : function(scope, element, attrs) {

			scope.mostrarMinlength;
			scope.mostrarMaxlength;
			scope.mostrarPattern;

			function MinLengthException() {
			}

			function MaxLengthException() {
			}

			function PatternException() {
			}

			scope.$watch('valor', function(newValue, oldValue) {

				var validar = function() {
					if (!new RegExp(scope.pattern).test(scope.valor)) {
						scope.mostrarPattern = true;
						scope.mostrarMinlength = false;
						scope.mostrarMaxlength = false;
						throw new PatternException();
					}

					if (scope.valor.length < scope.minlength) {
						scope.mostrarMinlength = true;
						scope.mostrarPattern = false;
						scope.mostrarMaxlength = false;
						throw new MinLengthException();
					}

					if (scope.valor.length > scope.maxlength) {
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