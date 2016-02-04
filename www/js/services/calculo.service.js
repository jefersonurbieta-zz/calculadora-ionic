app.factory('Calculo',function () {
        var Calculo = {};

        Calculo.calculaOperacao = function (operador1, operador2, operando) {
            switch (operando) {
              case '+':
                return operador1 + operador2;
                break;
              case '-':
                return operador1 - operador2;
                break;
              case '/':
                if (operador2 == 0) {
                  return 'NaN'
                }
                return operador1 / operador2;
                break;
              case 'x':
                return operador1 * operador2;
                break;
            }
        };

        /**
         * Atraves de uma array de operadores faz o calculo
         *
         * @param  operacaoArray - um array contento todos 
         * os operandos e operadores passados pelo usuario
         * @return resultado da operãcao
         */
        Calculo.calcula = function (operacaoArray) {
            var numeros = [];


            for (var i = 0 ; i < operacaoArray.length; i ++) {
              if(typeof(operacaoArray[i]) == 'number'){
                numeros.push(operacaoArray[i]);
              } else {
                var resultado = Calculo.calculaOperacao(numeros.pop(), numeros.pop(), operacaoArray[i]);
                numeros.push(resultado);
              } 
            };

            for (var i = 0 ; i < operacaoArray.length; i += 3) {
              console.log('i = ' +  i + ' teste =' + operacaoArray[i]);
              console.log(resultado);
              resultado += Calculo.calculaOperacao(operacaoArray[i], operacaoArray[i+2], operacaoArray[i+1]);
            };
            return resultado;
        };


        return Calculo;
    });