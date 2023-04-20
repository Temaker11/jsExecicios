/* ### Celsius em fahrenheit

  Crie uma função que receba uma string em celsius ou fahrenheit e faça a transformação de uma unidade para outra 
  
  C = (F - 32 * 5/9)
  
  F = C * 9/5+ 32 

*/

function transformeFC(fahrenheit) {
  total = 0;

  c = fahrenheit - (32 * 5) / 9;

  total = c;
  console.log(fahrenheit + "°f" + " = " + total + "°c")
  return total;
}

function transformeCF(celsius) {
  total = 0;

  f = celsius * 9/5 + 32;

  total = f;
  console.log(celsius + "°c" + " = " + total + "°f")
  return total;
}

transformeCF(50)

/* function transformeFC(valor) {
  const CExists = valor.toUpperCase(true).includes("C");
  const FExists = valor.toUpperCase(true).includes("F");

  if (!CExists && !FExists) {
    throw new Error("Grau não identificado");
  }
  let updatedValor = Number(valor.toUpperCase().replace("F", ""));
  let formula = (fahrenheit) => (fahrenheit - 32) * 5 / 9;
  let valorSing = "°C";

  if(CExists) {
    updatedValor = Number(valor.toUpperCase().replace("C", ""));
    formula = celsius => celsius * 9 / 5 + 32;
    valorSing = "°F";
  }
  console.log(formula(updatedValor) + valorSing)
  return formula(updatedValor) + valorSing;
  
}

try {
  
} catch (error) {
  console.log(error.message);
}

transformeFC("100F") */


