app.controller('mainController', [ '$scope', '$state',

   function($scope, $state) {


       $scope.numero;
       $scope.cantidad;
       $scope.hayError;


       $scope.successPrecio = function() {
           return $scope.form.cantidad.$valid && $scope.form.cantidad.$dirty;
       }

       $scope.errorPrecio = function() {
           return ($scope.form.cantidad.$invalid && $scope.form.cantidad.$dirty) || $scope.cantidadInvalida;
       }

       $scope.validarCantidadMaxima = function(cantidad) {
            //este nombre, "cantidadInvalida" tiene que ser el mismo que esta en messages.html
            $scope.cantidadInvalida = cantidad >= 1000;
        }


        $scope.guardar = function() {
          alert('submit!');
         }

        $scope.volver = function(cantidad) {
         if($state.current.name === 'inicio'){
            $state.go('acercaDe');
         }else{
            $state.go('inicio');
         }


     }

 }]);