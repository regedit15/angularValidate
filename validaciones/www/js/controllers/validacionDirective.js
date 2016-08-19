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

      // scope.saludo = 'Hola';
      // // para usarlo dentro del html de la directiva
      // scope.Constantes = Constantes;

      // scope.saludarClick = function(conferencia) {
      //   console.log('Holaaaaaaa ' + conferencia.ciudadanoId.nombre)
      // };

      // scope.minlength;
      // scope.maxlength;
      // scope.pattern;

      scope.validarValor = function(funcion) {
             if (scope.valor != null && scope.valor != '') {
                return funcion();
             }else{
                scope.error = undefined;
             }
      };

      scope.mostrarMinlength = function() {
             return scope.validarValor(function() {
                scope.error = scope.valor.length < scope.minlength;
                 return scope.error;
             });
      };

       scope.mostrarMaxlength = function() {
        return scope.validarValor(function() {
                 scope.error = scope.valor.length > scope.maxlength;
                 return scope.error;
             });
      };

      scope.mostrarPattern = function() {
        return scope.validarValor(function() {

                if (scope.error == false) {
                 scope.error = !new RegExp(scope.pattern).test(scope.valor);
                 return scope.error;   
                }
                 
             });
      };






    }
  }
} ]);