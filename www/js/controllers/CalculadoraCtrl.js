app.controller('CalculadoraCtrl', function ($scope, $window, $rootScope, ionicMaterialInk) {
    //ionic.material.ink.displayEffect();
    ionicMaterialInk.displayEffect();

  $scope.operacaoAtual = '';
  $scope.operadorAtual = '';
  $scope.atual = '';
  $scope.resultado = 0;
  $scope.fist = true;
  $rootScope.historico = [];

  $scope.calcula = function (operador1, operador2, operando) {
    switch (operando) {
      case '+':
        return operador1 + operador2;
        break;
      case '-':
        return operador1 - operador2;
        break;
      case '/':
        if (operador2 == 0) {
          return 'NAN'
        }
        return operador1 / operador2;
        break;
      case 'x':
        return operador1 * operador2;
        break;
    }
  };

  $scope.tratarTeclasDeOperacao = function (operador) {
    switch (operador) {
      case '=':
        $scope.resultado = $scope.calcula(parseFloat($scope.resultado), parseFloat($scope.atual), $scope.operadorAtual);
        $rootScope.historico.push($scope.operacaoAtual + ' ' + $scope.operadorAtual + ' ' + $scope.atual + ' = ' + $scope.resultado);
        $scope.atual = $scope.resultado;
        $scope.resultado = 0;
        $scope.operacaoAtual = '';
        $scope.operadorAtual = '';
        $scope.fist = true;
        break;
      case 'c':
        $scope.atual = '';
        $scope.resultado = 0;
        $scope.operacaoAtual = '';
        $scope.operadorAtual = '';
        $scope.fist = true;
        break;
      case 'back':
        $scope.atual = $scope.atual.substring(0, $scope.atual.length - 1);
        break;
      default:
        if($scope.fist){
          $scope.resultado = parseFloat($scope.atual);
          $scope.fist = false;
        } else {
          $scope.resultado = $scope.calcula(parseFloat($scope.resultado), parseFloat($scope.atual), $scope.operadorAtual);

        }
        $scope.operacaoAtual += $scope.atual + ' ' + operador + ' ';
        $scope.atual = '';
        $scope.operadorAtual = operador;
    }

  };

  $scope.tratarTeclasDeValor = function (valor) {
    if($scope.atual.length < 8){
      $scope.atual += valor.toString();
    }
  };
});
