app.controller('CalculadoraCtrl', function ($scope, $window, $rootScope, ionicMaterialInk, Calculo) {
    //ionic.material.ink.displayEffect();
    ionicMaterialInk.displayEffect();

  
  $scope.operacaoAtual = '';
  $scope.atual = '';
  $rootScope.historico = [];
  $scope.operacao = [];

  $scope.tratarTeclasDeOperacao = function (operador) {
    switch (operador) {
      case '=':
        if($scope.atual.length > 0){
            $scope.operacao.push(parseFloat($scope.atual));
            $scope.operacaoAtual += $scope.atual + ' = ';
          }
          //Calcula a operacao
          $scope.resultado = Calculo.calcula($scope.operacao);
          //grava a operacao no historico
          $scope.operacaoAtual += $scope.resultado;
          $rootScope.historico.push($scope.operacaoAtual);
          //Limpa os campos e mostra resultado
          $scope.operacaoAtual = '';
          $scope.atual = $scope.resultado + ' ';
          break;
      case 'c':
        $scope.atual = '';
        $scope.operacaoAtual = '';
        $scope.operacao = [];
        break;
      case 'back':
        $scope.atual = $scope.atual.substring(0, $scope.atual.length - 1);
        break;
      default:
        if($scope.atual.length > 0){
          $scope.operacao.push(parseFloat($scope.atual));
          $scope.operacao.push(operador);
          $scope.operacaoAtual += $scope.atual + ' ' + operador + ' ';
          $scope.atual = '';
        }
    }

  };

  $scope.tratarTeclasDeValor = function (valor) {
    if($scope.atual.length < 8){
      $scope.atual += valor.toString();
    }
  };
});
