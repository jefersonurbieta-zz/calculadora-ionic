app.factory('Calculo', function () {
  var Calculo = {};

  /**
   * Faz o calculo de uma operacao matematica
   */
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
   * Formata um array para a Notação Polonesa Reversa
   *  exemplo:
   *    entrada: 1, +, 2, * 4, +, 3
   *    saida: 1, 2, +, 4, *, 3, +
   *
   * @param  array - um array contento todos os operandos e operadores
   * @return array formatado
   */
  Calculo.transformaEmArrayPolonesaReversa = function (array) {
    console.log(array.toString());
    for (var i = 0; i < array.length; i++) {
      if (i == 0) {
        var aux = array[1];
        array[1] = array[2];
        array[2] = aux;
        i = 2;
      } else {
        var aux = array[i];
        array[i] = array[i + 1];
        array[i + 1] = aux;
        i += 1;
      }
    }
    console.log(array.toString());
    return array;
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

    //Formata o array para formtado te uma string da notação polonesa reversa
    var arrayFormatado = Calculo.transformaEmArrayPolonesaReversa(operacaoArray);

    for (var i = 0; i < arrayFormatado.length; i++) {
      if (typeof(arrayFormatado[i]) == 'number') {
        numeros.push(arrayFormatado[i]);
      } else {
        /*
        if (arrayFormatado[i] == '/') {
          var op1 = numeros.pop();
          var op2 = numeros.pop();
          var resultado = Calculo.calculaOperacao(op2, op1, arrayFormatado[i]);
        } else {
          var resultado = Calculo.calculaOperacao(numeros.pop(), numeros.pop(), arrayFormatado[i]);
        }
        */
        var op1 = numeros.pop();
        var op2 = numeros.pop();
        var resultado = Calculo.calculaOperacao(op2, op1, arrayFormatado[i]);
        numeros.push(resultado);
      }
    }
    return numeros.pop();
  };


  return Calculo;
});
