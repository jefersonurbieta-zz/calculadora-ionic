app.controller('SettingsCtrl', function ($scope, $rootScope, $stateParams, ionicMaterialInk) {
  //ionic.material.ink.displayEffect();
  ionicMaterialInk.displayEffect();

  $scope.colorList = [{
    id: '0',
    name: 'dark',
    class: 'button-dark'
  }, {
    id: '1',
    name: 'stable',
    class: 'button-stable'
  }, {
    id: '2',
    name: 'positive',
    class: 'button-positive'
  }, {
    id: '3',
    name: 'calm',
    class: 'button-calm'
  }, {
    id: '4',
    name: 'balanced',
    class: 'button-balanced'
  }, {
    id: '5',
    name: 'energized',
    class: 'button-energized'
  }, {
    id: '6',
    name: 'assertive',
    class: 'button-assertive'
  }, {
    id: '7',
    name: 'royal',
    class: 'button-royal'
  }];

  $scope.formList = [{
    id: '0',
    name: 'Quadrado',
    class: 'button-raised'
  }, {
    id: '1',
    name: 'Redondo',
    class: 'button-fab'
  }];

  $scope.mySelection = {
    colorId: 0,
    formId: 0
  };

  $scope.showChange = function () {
    $rootScope.colorButtons = $scope.colorList[$scope.mySelection.colorId];
    $rootScope.formButtons = $scope.formList[$scope.mySelection.formId];
  };


})
;
