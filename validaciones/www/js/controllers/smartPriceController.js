app.controller('mainController', [ '$scope', '$state',

   function($scope, $state) {

       $scope.cantidad;

       $scope.successPrecio = function() {
           return $scope.form.cantidad.$valid && $scope.form.cantidad.$touched;
       }

       $scope.errorPrecio = function() {
           return !$scope.form.cantidad.$valid && $scope.form.cantidad.$touched;
       }

       $scope.validarCantidadMaxima = function(cantidad) {
            //este nombre, "cantidadInvalida" tiene que ser el mismo que esta en messages.html
            $scope.cantidadInvalida = ((cantidad >= 1000) && $scope.form.cantidad.$touched);
        }

        $scope.volver = function(cantidad) {
         if($state.current.name === 'inicio'){
            $state.go('acercaDe');
         }else{
            $state.go('inicio');
         }
     }

 }]);