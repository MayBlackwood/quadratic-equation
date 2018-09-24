module.exports = function solveEquation(equation) {
  var arr1 = equation.split(' * x^2 ');
  var a = parseInt(arr1[0]);
  var arr2 = arr1[1].split(' * x ');

  for (i = 0; i < arr2.length; i++){
    arr2[i] = arr2[i].replace(" ",""); 
  }
    
  var b = parseInt(arr2[0]);
  var c = parseInt(arr2[1]);
  var D = b * b - 4 * a * c;
  var x1 = Math.round((-b + Math.sqrt(D)) / (2 * a));
  var x2 = Math.round((-b - Math.sqrt(D)) / (2 * a));

  var answer = [];
  if ( x1 > x2) { 
    answer.push(x2);
    answer.push(x1);  
    } 
    else { 
      answer.push(x1);
      answer.push(x2);        
    } 
    
 
  return answer;
}
