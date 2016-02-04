app.controller('CalculadoraCtrl', function ($scope, $window, $rootScope, ionicMaterialInk, Calculo) {
    //ionic.material.ink.displayEffect();
    ionicMaterialInk.displayEffect();


  $scope.operacaoAtual = '';
  $scope.atual = '';
  $rootScope.historico = [];
  $scope.operacao = [];
  $scope.fontSize = 'font5';

  $scope.ajusteFonteSize = function (){
    var length = $scope.atual.toString().length;
    if(length <= 8){
      $scope.fontSize = 'font5';
    } else if(length > 8 && length <= 10){
      $scope.fontSize = 'font4';
    } else if(length > 10 && length <= 13){
      $scope.fontSize = 'font3';
    } else if(length > 13 ){
      $scope.fontSize = 'font2';
    }
    $scope.$apply();

  };

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
          $scope.operacao = [];
          $scope.atual = $scope.resultado;
          $scope.ajusteFonteSize();
          break;
      case 'c':
        $scope.atual = '';
        $scope.operacaoAtual = '';
        $scope.operacao = [];
        break;
      case 'back':
        if(typeof($scope.atual) == 'number'){
          $scope.atual = $scope.atual + ' ';
          $scope.atual = $scope.atual.substring(0, $scope.atual.length - 2);
        } else {
          $scope.atual = $scope.atual.substring(0, $scope.atual.length - 1);
        }
        break;
      case '+/-':
        $scope.atual = parseFloat($scope.atual);
        $scope.atual = $scope.atual * -1;
        break;
      default:
        //if($scope.atual.length > 0){
          $scope.operacao.push(parseFloat($scope.atual));
          $scope.operacao.push(operador);
          $scope.operacaoAtual += $scope.atual + ' ' + operador + ' ';
          $scope.atual = '';
          $scope.ajusteFonteSize();
       // }
    }

  };

  $scope.tratarTeclasDeValor = function (valor) {
    if($scope.atual.length < 15){
      $scope.atual += valor.toString();
      $scope.ajusteFonteSize();
    }
  };
});
