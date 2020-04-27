
//retorna true se o array conter o valor testado
Array.prototype.contains = function(obj) {
    var i = this.length;
    while (i--) {
        if (this[i] == obj) {
            return true;
        }
    }
    return false;
}
 
function random(i, f) {
if (i > f) {
    numInicial = f;numFinal = i+1;
    } else {
        numInicial = i;numFinal = f+1;
    }
    numRandom = Math.floor((Math.random()*(numFinal-numInicial))+numInicial);
    return numRandom;
}
 
//função mega sena, ela retorna um array com 6 numeros para o sorteio
var megasena = function (){
  this.result = [];
  var num = 0;
do
  {
    num = random(1,60);
        //caso o array de resultado não contenha o valor randomico, incrementa o valor
    if (!this.result.contains(num)){
      this.result.push(num); // +"" converte pra string, resolvendo o problema do type error ao chamar o resultado
    }
  }
while (this.result.length<6);
  return this.result.sort(function(a, b){return a-b});
}

console.log(megasena())

export default random;

